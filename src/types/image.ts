export type ViewerStatus = 'idle' | 'loading' | 'ready' | 'empty' | 'error';

export interface ImageFileEntry {
  id: string;
  name: string;
  url: string;
  type: string;
}

export interface ViewerState {
  status: ViewerStatus;
  folderName: string;
  images: ImageFileEntry[];
  currentIndex: number;
  errorMessage: string;
}

export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
