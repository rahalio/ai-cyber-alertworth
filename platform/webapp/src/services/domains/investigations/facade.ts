/**
 * Investigations Domain Facade
 *
 * High-level API for investigations domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { investigationsService } from "./investigations.service";
// TODO: Import types
// import type { ... } from "./investigations.api-types";

/**
 * Investigations Facade
 *
 * High-level API for investigations operations.
 * Components should use this facade instead of services directly.
 */
export const investigationsFacade = {
  /**
   * List investigation cases
   */
  async getInvestigation(...args: Parameters<typeof investigationsService.getInvestigation>): Promise<any> {
    return investigationsService.getInvestigation(...args);
  },

  /**
   * Open an investigation case
   */
  async getInvestigation_2(...args: Parameters<typeof investigationsService.getInvestigation>): Promise<any> {
    return investigationsService.getInvestigation(...args);
  },

  /**
   * Record investigation disposition
   */
  async getDisposition(...args: Parameters<typeof investigationsService.getDisposition>): Promise<any> {
    return investigationsService.getDisposition(...args);
  },

  /**
   * Challenge auto-dismissal into queue
   */
  async getChallengeDismissal(...args: Parameters<typeof investigationsService.getChallengeDismissal>): Promise<any> {
    return investigationsService.getChallengeDismissal(...args);
  }
};
