import { useCallback, useMemo, useState } from 'react';
import { ImageFileEntry, SUPPORTED_EXTENSIONS, SUPPORTED_IMAGE_TYPES, ViewerState } from '../types/image';

const initialState: ViewerState = {
  status: 'idle',
  folderName: '',
  images: [],
  currentIndex: 0,
  errorMessage: '',
};

export function useImageFolder() {
  const [state, setState] = useState<ViewerState>(initialState);

  const loadFolder = useCallback(async (folderHandle: FileSystemDirectoryHandle | null) => {
    if (!folderHandle) {
      setState({ ...initialState, status: 'idle' });
      return;
    }

    setState({ ...initialState, status: 'loading', folderName: folderHandle.name });

    try {
      const entries: ImageFileEntry[] = [];
      const files = await listFiles(folderHandle);

      for (const file of files) {
        if (!isSupportedFile(file)) {
          continue;
        }

        const url = URL.createObjectURL(file);
        entries.push({
          id: `${file.name}-${url}`,
          name: file.name,
          url,
          type: file.type,
        });
      }

      if (entries.length === 0) {
        setState({
          status: 'empty',
          folderName: folderHandle.name,
          images: [],
          currentIndex: 0,
          errorMessage: 'No supported images were found in this folder.',
        });
        return;
      }

      setState({
        status: 'ready',
        folderName: folderHandle.name,
        images: entries,
        currentIndex: 0,
        errorMessage: '',
      });
    } catch (error) {
      setState({
        status: 'error',
        folderName: folderHandle.name,
        images: [],
        currentIndex: 0,
        errorMessage: error instanceof Error ? error.message : 'The folder could not be read.',
      });
    }
  }, []);

  const nextImage = useCallback(() => {
    setState((current) => {
      if (current.images.length === 0) {
        return current;
      }

      return {
        ...current,
        currentIndex: Math.min(current.currentIndex + 1, current.images.length - 1),
      };
    });
  }, []);

  const previousImage = useCallback(() => {
    setState((current) => {
      if (current.images.length === 0) {
        return current;
      }

      return {
        ...current,
        currentIndex: Math.max(current.currentIndex - 1, 0),
      };
    });
  }, []);

  const currentImage = useMemo(() => state.images[state.currentIndex] ?? null, [state.currentIndex, state.images]);

  return { state, loadFolder, nextImage, previousImage, currentImage };
}

interface DirectoryHandleWithValues extends FileSystemDirectoryHandle {
  values(): AsyncIterableIterator<FileSystemHandle>;
}

async function listFiles(directory: FileSystemDirectoryHandle): Promise<File[]> {
  const files: File[] = [];
  const stack = [directory];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }

    const entries = (current as DirectoryHandleWithValues).values();
    for await (const entry of entries) {
      if (entry.kind === 'file') {
        if (entry.name.startsWith('.')) {
          continue;
        }
        const file = await (entry as FileSystemFileHandle).getFile();
        files.push(file);
      } else if (entry.kind === 'directory') {
        stack.push(entry as FileSystemDirectoryHandle);
      }
    }
  }

  return files;
}

function isSupportedFile(file: File): boolean {
  const normalizedName = file.name.toLowerCase();
  const extensionMatches = SUPPORTED_EXTENSIONS.some((extension) => normalizedName.endsWith(extension));
  const typeMatches = SUPPORTED_IMAGE_TYPES.includes(file.type);
  return extensionMatches || typeMatches;
}
