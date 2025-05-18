# SpiritGuardianBattle

This repository contains the early scaffold for a Digimon-like game where players explore a 3D world, battle Spirit Guardians, and evolve them across different regions.

## Structure

- `client/` – React and TypeScript front-end using React Three Fiber.
- `server/` – Express server with basic API routes.
- `shared/` – Shared types used by both client and server.

## Features

The current implementation includes placeholder components and systems for:

- 3D Player character and world terrain
- Random encounter manager with region-based data
- Turn-based battle logic with elemental advantages

These modules serve as a foundation for future development and integration.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server for the client:
   ```bash
   npm run dev
   ```
   This uses Vite to serve the React/TypeScript client.
3. In another terminal, run the Express API server:
   ```bash
   npm run server
   ```
4. Build the client for production with:
   ```bash
   npm run build
   ```

The compiled client output will be placed in the `dist/` directory.
