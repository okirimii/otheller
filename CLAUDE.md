# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Otheller is a Python web application for learning Othello (Reversi) game development. It's built with Flask and provides a structured architecture for implementing and testing Othello strategies.

## Development Commands

### Environment Setup

```bash
# Install dependencies with uv
uv sync

# Install development dependencies
uv sync --group dev
```

### Code Quality

```bash
# Run linting (strict rules enabled)
uv run ruff check

# Auto-fix linting issues
uv run ruff check --fix

# Format code
uv run ruff format

# Type checking
uv run mypy otheller/
```

### Running the Application

```bash
# Start Flask development server
uv run flask --app otheller run

# Or with Python module
uv run python -m flask --app otheller run
```

## Architecture

### Core Module Structure

The game logic is organized in `otheller/core/` with clear separation of concerns:

- **Board**: Facade class providing the main interface to the game system
- **BoardState**: Manages the 8x8 game board representation and state
- **Placement**: Handles move validation and stone placement logic
- **GameManager**: Controls game flow, turn management, and stone flipping
- **GameSimulator**: Provides simulation functionality for move previews without affecting actual game state
- **ScoreCalculator**: Handles scoring and winner determination

### Service Layer

The `otheller/service/` module provides higher-level game management:

- **GameController**: Unified controller managing game lifecycle and strategy execution
- **GameState**: Maintains current game state and player information
- **JSONStorage**: Handles persistence of game state to disk

### Frontend Architecture

- Static assets in `otheller/static/` with modular JavaScript architecture
- Template-based rendering using Flask's Jinja2 templates
- Game orchestration through client-side modules for real-time interaction

### Key Design Patterns

- **Facade Pattern**: `Board` class provides a simplified interface to the complex game system
- **Copy Pattern**: `Board.create_copy()` creates independent instances for simulation
- **Separation of Concerns**: Each class has a single, well-defined responsibility
- **Strategy Pattern**: Player strategies are pluggable modules loaded dynamically

## Code Standards

### Formatting & Style

- Line length: 99 characters
- Use double quotes for strings
- 4-space indentation
- Enforce trailing commas
- Type hints required for all function definitions

### Linting Rules

- All rules enabled ("ALL") with specific ignores:
  - No docstring requirements (D rules ignored)
  - Missing `__init__.py` files allowed (INP001)
  - Catch-all exceptions allowed (BLE001)
  - Type ignore comments allowed (PGH003)

### Type Checking

- Strict mypy configuration with untyped definitions disallowed
- Python 3.12 target version
- Missing third-party imports ignored

## Testing

Currently no test framework is configured. When adding tests, follow the existing project structure and code quality standards.

## Frontend Development

### JavaScript/CSS Tools

```bash
# Install Node.js dependencies (for linting/formatting)
pnpm install

# Lint JavaScript files
pnpm run lint

# Format JavaScript and CSS
pnpm run format
```

## Language Guidelines

- **Language Policy**:
  - Respond in Japanese when communicating with users
  - Internal thinking can be done in English
  - Strictly use Japanese and English languages
  - Obtain user permission before using any other language
