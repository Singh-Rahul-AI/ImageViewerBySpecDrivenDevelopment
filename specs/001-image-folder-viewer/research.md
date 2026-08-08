# Research: Image Folder Viewer

## Decision: Folder selection approach
- Chosen approach: use a browser-based folder picker that allows the user to select a local folder and load its supported image files into the current session.
- Rationale: This fits a Vite web app and keeps the first release focused on a single-folder review experience.
- Alternatives considered: Electron or a desktop shell for native filesystem access. This was rejected because it would add platform and packaging complexity beyond the current scope.

## Decision: Supported image formats
- Chosen approach: support JPEG, PNG, and WebP for the initial release.
- Rationale: These formats cover the most common use cases and map directly to the clarified specification.
- Alternatives considered: broad support for RAW and other specialized formats. This was rejected because it would expand the scope and increase compatibility risk.

## Decision: Navigation and state model
- Chosen approach: maintain the selected images as an ordered list and track the current index for previous and next navigation.
- Rationale: This supports simple browsing and clear context without introducing persistence or backend complexity.
- Alternatives considered: loading images on demand from the filesystem each time the user navigates. This was rejected because it adds unnecessary churn and makes the UI less predictable.

## Decision: Visual design approach
- Chosen approach: use Tailwind CSS with light and dark theme support through shared theme tokens and accessible contrast.
- Rationale: This aligns with the project constitution and keeps the UI consistent.
- Alternatives considered: custom CSS-only styling. This was rejected because it would not meet the styling governance requirement.
