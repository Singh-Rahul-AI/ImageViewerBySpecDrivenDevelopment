# Imageviewer App Constitution

<!-- Sync Impact Report
- Version change: 0.0.0 -> 1.0.0
- Modified principles: none (initial constitution)
- Added principles: Functional Component-First, Vite-First Delivery, Tailwind-Driven Styling, Theme-First UX, Lean Verification
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Follow-up TODOs: TODO(RATIFICATION_DATE): set the official adoption date before formal ratification.
-->

## Core Principles

### I. Functional Component-First
All user interface features MUST be implemented as functional React components in TypeScript. Class components, mixed component styles, and inheritance-based UI patterns are prohibited unless a documented exception is approved by the maintainers. This keeps the codebase consistent with modern React usage and simplifies state management.

### II. Vite-First Delivery
The application MUST be built and run through Vite, with TypeScript as the default language for new code. Changes MUST remain compatible with the Vite development workflow and avoid introducing additional bundler or build-system complexity. This preserves fast iteration and predictable local development.

### III. Tailwind-Driven Styling
All styling MUST use Tailwind CSS utilities and project theme tokens. New visual patterns MUST be expressed through Tailwind classes rather than ad hoc custom CSS unless a small exception is justified in code comments. This ensures consistency, maintainability, and easy theming.

### IV. Theme-First UX
The app MUST support a consistent light and dark theme experience using shared theme values and accessible contrast. New UI surfaces MUST respect the active theme without introducing hard-coded colors or inconsistent spacing. This keeps the experience cohesive and accessible.

### V. Lean Verification
Automated testing is not required for this project at initial scope. Changes MUST still be manually verified in the Vite development environment and any visible regressions MUST be corrected before merge. This matches the stated no-testing constraint while preserving basic product quality.

## Additional Constraints
The project MUST use React with TypeScript, functional components only, Vite for local development and builds, and Tailwind CSS for styling. The app MUST remain focused on image viewing workflows and avoid introducing unnecessary architecture or state-management abstractions. Any deviation from these constraints MUST be explicitly documented and approved.

## Development Workflow
New work MUST be implemented in small, reviewable increments. Each change MUST preserve the existing Vite + React + TypeScript + Tailwind setup and MUST keep the UI usable in both light and dark themes. Pull requests MUST confirm that the change works in the local development environment and that any new UI behavior is visually reviewed.

## Governance
This constitution supersedes ad hoc project conventions for this repository. Amendments MUST be proposed in writing, reviewed for impact on the stated principles, and recorded with a version bump and amendment date. Compliance reviews MUST verify that new work follows the required stack, component model, styling approach, and theme behavior.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): set the official adoption date before formal ratification. | **Last Amended**: 2026-08-07
