/**
 * Game State Management Module
 * Handles game state management
 */

class GameState {
  constructor() {
    this.state = null;
    this.isGameEnd = false;
    this.isPlayerVsCpu = false;
    this.playerNumber = 1;
    this.waitingForPlayer = false;
    this.autoInterval = null;
  }

  // Set game state
  setState(newState) {
    this.state = newState;
  }

  // Get game state
  getState() {
    return this.state;
  }

  // Set game end state
  setGameEnd(isEnd) {
    this.isGameEnd = isEnd;
  }

  // Check if game is finished
  isGameFinished() {
    return this.isGameEnd;
  }

  // Set player vs CPU mode
  setPlayerVsCpuMode(isPlayer, playerNumber = 1) {
    this.isPlayerVsCpu = isPlayer;
    this.playerNumber = playerNumber;
  }

  // Set CPU vs CPU mode
  setCpuVsCpuMode() {
    this.isPlayerVsCpu = false;
    this.playerNumber = 1;
  }

  // Check if player vs CPU mode
  isPlayerVsCpuMode() {
    return this.isPlayerVsCpu;
  }

  // Get player number
  getPlayerNumber() {
    return this.playerNumber;
  }

  // Set waiting for player flag
  setWaitingForPlayer(waiting) {
    this.waitingForPlayer = waiting;
  }

  // Check if waiting for player
  isWaitingForPlayer() {
    return this.waitingForPlayer;
  }

  // Check if move is valid
  isValidMove(row, col) {
    if (!this.state || !this.state.valid_moves) {
      return false;
    }

    // valid_moves is [[moveRow, moveCol], ...] format
    // moveRow, moveCol is the destination row and column coordinates
    return this.state.valid_moves.some(([moveRow, moveCol]) => moveRow === row && moveCol === col);
  }

  // Set auto interval
  setAutoInterval(interval) {
    this.autoInterval = interval;
  }

  // Get auto interval
  getAutoInterval() {
    return this.autoInterval;
  }

  // Clear auto interval
  clearAutoInterval() {
    if (this.autoInterval) {
      clearInterval(this.autoInterval);
      this.autoInterval = null;
    }
  }

  // Check if current player is human
  isCurrentPlayerHuman() {
    return this.isPlayerVsCpu && this.state && this.state.current_player === this.playerNumber;
  }

  // Reset game state
  reset() {
    this.state = null;
    this.isGameEnd = false;
    this.isPlayerVsCpu = false;
    this.playerNumber = 1;
    this.waitingForPlayer = false;
    this.clearAutoInterval();
  }
}

export default GameState;
