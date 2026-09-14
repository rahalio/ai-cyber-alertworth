/**
 * Scoring Domain Facade
 *
 * High-level API for scoring domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { scoringService } from "./scoring.service";
// TODO: Import types
// import type { ... } from "./scoring.api-types";

/**
 * Scoring Facade
 *
 * High-level API for scoring operations.
 * Components should use this facade instead of services directly.
 */
export const scoringFacade = {
  /**
   * List alerts with economic scores
   */
  async getAlert(...args: Parameters<typeof scoringService.getAlert>): Promise<any> {
    return scoringService.getAlert(...args);
  },

  /**
   * Get alert economic score
   */
  async getScore(...args: Parameters<typeof scoringService.getScore>): Promise<any> {
    return scoringService.getScore(...args);
  },

  /**
   * List dismissal policies
   */
  async getDismissalPolicy(...args: Parameters<typeof scoringService.getDismissalPolicy>): Promise<any> {
    return scoringService.getDismissalPolicy(...args);
  },

  /**
   * Create dismissal policy
   */
  async createDismissalPolicy(...args: Parameters<typeof scoringService.createDismissalPolicy>): Promise<any> {
    return scoringService.createDismissalPolicy(...args);
  },

  /**
   * Approve dismissal policy
   */
  async createApprove(...args: Parameters<typeof scoringService.createApprove>): Promise<any> {
    return scoringService.createApprove(...args);
  },

  /**
   * Run dismissal back-test
   */
  async createBackTest(...args: Parameters<typeof scoringService.createBackTest>): Promise<any> {
    return scoringService.createBackTest(...args);
  }
};
