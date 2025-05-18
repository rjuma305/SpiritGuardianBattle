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
- Evolution chain definitions and checks
- Basic Zustand store for the player's Spirit Guardian
- Save/load functions using browser storage

Eight elemental guardians (earth, wind, water, fire, light, shadow, ice and lightning) each have simple two-stage evolution chains.

These modules serve as a foundation for future development and integration.
