# UI Contract: Image Folder Viewer

## Inputs
- The user chooses a folder through the folder picker.
- The user navigates to the previous or next image.
- The user toggles the current theme.

## Output State
```json
{
  "folderName": "string",
  "status": "ready | empty | error",
  "currentIndex": 0,
  "imageFiles": [
    {
      "name": "string",
      "type": "string",
      "url": "string"
    }
  ]
}
```

## Expected Behavior
- When the selected folder contains supported images, the first image is shown and navigation controls become available.
- When the folder contains no supported images, the UI shows an empty-state message.
- When the folder cannot be read, the UI shows an error-state message.
