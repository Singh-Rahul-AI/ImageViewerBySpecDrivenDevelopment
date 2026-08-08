import { useMemo } from 'react';
import { ImageFileEntry, ViewerStatus } from '../types/image';

interface ImageViewerProps {
  status: ViewerStatus;
  folderName: string;
  currentImage: ImageFileEntry | null;
  images: ImageFileEntry[];
  currentIndex: number;
  errorMessage: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageViewer({
  status,
  folderName,
  currentImage,
  images,
  currentIndex,
  errorMessage,
  onPrevious,
  onNext,
}: ImageViewerProps) {
  const content = useMemo(() => {
    if (status === 'loading') {
      return (
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-lg font-semibold">Loading images…</p>
        </div>
      );
    }

    if (status === 'empty') {
      return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-lg font-semibold">No supported images found.</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Choose a folder that contains JPEG, PNG, or WebP files.</p>
        </div>
      );
    }

    if (status === 'error') {
      return (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center shadow-sm dark:border-rose-900 dark:bg-rose-950/40">
          <p className="text-lg font-semibold text-rose-700 dark:text-rose-300">Unable to read this folder.</p>
          <p className="mt-2 text-sm text-rose-700/80 dark:text-rose-300/80">{errorMessage}</p>
        </div>
      );
    }

    if (!currentImage) {
      return (
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-lg font-semibold">Select a folder to begin.</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <img src={currentImage.url} alt={currentImage.name} className="h-[60vh] w-full object-contain" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
          <div>
            <p className="text-sm font-medium">{currentImage.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{folderName}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevious}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              disabled={images.length <= 1 || currentIndex === 0}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              disabled={images.length <= 1 || currentIndex === images.length - 1}
            >
              Next
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Image {Math.min(currentIndex + 1, images.length)} of {images.length}
        </p>
      </div>
    );
  }, [currentImage, currentIndex, errorMessage, folderName, images.length, onNext, onPrevious, status]);

  return <div>{content}</div>;
}
