# Tasks: Image Folder Viewer

**Input**: Design documents from `/specs/001-image-folder-viewer/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the app shell and shared frontend configuration for the image viewer.

- [x] T001 Create the Vite React TypeScript app structure in package.json, tsconfig.json, vite.config.ts, index.html, and src/main.tsx
- [x] T002 [P] Install and configure Tailwind CSS in tailwind.config.js, postcss.config.js, and src/index.css
- [x] T003 [P] Add the base app layout and theme shell in src/components/App.tsx

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared image-loading and state model needed by all stories.

- [x] T004 Create shared image types and supported-format constants in src/types/image.ts
- [x] T005 Implement folder selection and image-loading logic in src/hooks/useImageFolder.ts
- [x] T006 Create a reusable viewer shell and status rendering in src/components/ImageViewer.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Open a folder and view images (Priority: P1) 🎯 MVP

**Goal**: Let the user select a folder and see supported images from it.

**Independent Test**: A user can choose a folder, see supported images appear, and see an empty or error state when appropriate.

### Implementation for User Story 1

- [x] T007 [US1] Wire the folder picker to the image-loading hook in src/components/App.tsx
- [x] T008 [US1] Render the first supported image and show empty/error states in src/components/ImageViewer.tsx
- [x] T009 [US1] Handle folder-read failures and unsupported-file filtering in src/hooks/useImageFolder.ts

**Checkpoint**: User Story 1 should be fully functional and independently testable.

---

## Phase 4: User Story 2 - Move through images in a folder (Priority: P2)

**Goal**: Let the user move forward and backward through the current image set.

**Independent Test**: A user can move between images and remain within the valid image range.

### Implementation for User Story 2

- [x] T010 [P] [US2] Add previous and next navigation controls in src/components/ImageViewer.tsx
- [x] T011 [US2] Track the current image index and enforce boundary handling in src/hooks/useImageFolder.ts
- [x] T012 [US2] Display the current position and total image count in src/components/ImageViewer.tsx

**Checkpoint**: User Stories 1 and 2 should both work independently.

---

## Phase 5: User Story 3 - Understand the current viewing context (Priority: P3)

**Goal**: Give the user clear context about the current image and the folder contents.

**Independent Test**: A user can understand which image is active and whether the folder contains one image or many.

### Implementation for User Story 3

- [x] T013 [P] [US3] Add image metadata and context messaging in src/components/ImageViewer.tsx
- [x] T014 [US3] Ensure the viewer reflects single-image and multi-image conditions in src/hooks/useImageFolder.ts
- [x] T015 [US3] Add accessible labels and keyboard-friendly navigation in src/components/ImageViewer.tsx

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Refine the experience across the full workflow.

- [x] T016 [P] Improve light/dark theme styling and spacing in src/components/App.tsx and src/index.css
- [x] T017 Update documentation and validation guidance in README.md and specs/001-image-folder-viewer/quickstart.md
- [x] T018 Run the Vite app and verify the quickstart scenarios in the browser

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational and is the MVP
- **User Story 2 (P2)**: Can start after Foundational and can be completed independently
- **User Story 3 (P3)**: Can start after Foundational and can be completed independently

### Parallel Opportunities

- T002 and T003 can be completed in parallel
- T010 and T013 can be completed in parallel once the shared viewer shell exists
- T016 and T017 can be completed in parallel during the polishing phase

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate the experience in the browser before adding navigation or context features

### Incremental Delivery

1. Complete Setup and Foundational work
2. Deliver User Story 1 for the MVP
3. Add User Story 2 for browsing flow
4. Add User Story 3 for richer context and accessibility
