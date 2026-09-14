/**
 * Triage Domain Facade
 *
 * High-level API for triage domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { triageService } from "./triage.service";
// TODO: Import types
// import type { ... } from "./triage.api-types";

/**
 * Triage Facade
 *
 * High-level API for triage operations.
 * Components should use this facade instead of services directly.
 */
export const triageFacade = {
  /**
   * List triage shifts
   */
  async getShift(...args: Parameters<typeof triageService.getShift>): Promise<any> {
    return triageService.getShift(...args);
  },

  /**
   * Open a triage shift
   */
  async getShift_2(...args: Parameters<typeof triageService.getShift>): Promise<any> {
    return triageService.getShift(...args);
  },

  /**
   * List capacity-capped triage queue
   */
  async getQueue(...args: Parameters<typeof triageService.getQueue>): Promise<any> {
    return triageService.getQueue(...args);
  },

  /**
   * Admit alert to triage queue
   */
  async getAdmit(...args: Parameters<typeof triageService.getAdmit>): Promise<any> {
    return triageService.getAdmit(...args);
  },

  /**
   * Route overflow explicitly
   */
  async getOverflow(...args: Parameters<typeof triageService.getOverflow>): Promise<any> {
    return triageService.getOverflow(...args);
  },

  /**
   * Execute containment action
   */
  async createContainmentAction(...args: Parameters<typeof triageService.createContainmentAction>): Promise<any> {
    return triageService.createContainmentAction(...args);
  },

  /**
   * Override containment action
   */
  async getOverride(...args: Parameters<typeof triageService.getOverride>): Promise<any> {
    return triageService.getOverride(...args);
  }
};
