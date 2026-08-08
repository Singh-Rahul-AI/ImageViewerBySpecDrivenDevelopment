# Data Model: Image Folder Viewer

## Entities

### FolderSelection
- id: unique identifier for the active folder selection
- folderName: display label for the selected folder
- selectedAt: timestamp of the selection action

### ImageFile
- id: unique identifier for the image entry
- fileName: user-visible file name
- sourcePath: browser-resolved path or identifier for the file
- mimeType: declared media type for the image
- isSupported: whether the file matches the supported format list

### ViewerSession
- selectedFolder: reference to the active folder selection
- imageFiles: ordered list of supported images from the folder
- currentIndex: current position in the image list
- status: one of idle, loading, ready, empty, or error

## Relationships
- One FolderSelection can contain many ImageFile entries.
- One ViewerSession references one active FolderSelection and one ordered list of ImageFile items.
- The current view is derived from the currentIndex within the ViewerSession.

## Validation Rules
- The currentIndex MUST remain within the bounds of the image list when the session is ready.
- Only supported image formats MAY be included in the active image list.
- The session MUST enter an empty or error state when no supported images are available or the folder cannot be read.
