import { useCallback } from 'react';
import { useImageFolder } from '../hooks/useImageFolder';
import { ImageViewer } from './ImageViewer';

export function App() {
  const { state, loadFolder, nextImage, previousImage, currentImage } = useImageFolder();

  const handleFolderSelection = useCallback(async () => {
    try {
      const picker = (window as Window & { showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle> }).showDirectoryPicker;
      const handle = await picker?.();
      await loadFolder(handle ?? null);
    } catch {
      // Ignore cancelled picker selection.
    }
  }, [loadFolder]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Image Viewer</p>
            <h1 className="text-3xl font-semibold">Browse images from any folder</h1>
          </div>
          <button
            type="button"
            onClick={handleFolderSelection}
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Choose Folder
          </button>
        </header>

        <main className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <ImageViewer
            status={state.status}
            folderName={state.folderName}
            currentImage={currentImage}
            images={state.images}
            currentIndex={state.currentIndex}
            errorMessage={state.errorMessage}
            onPrevious={previousImage}
            onNext={nextImage}
          />
        </main>
      </div>
    </div>
  );
}
