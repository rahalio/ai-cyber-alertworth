/**
 * Reporting Domain Facade
 *
 * High-level API for reporting domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { reportingService } from "./reporting.service";
// TODO: Import types
// import type { ... } from "./reporting.api-types";

/**
 * Reporting Facade
 *
 * High-level API for reporting operations.
 * Components should use this facade instead of services directly.
 */
export const reportingFacade = {
  /**
   * List residual risk snapshots
   */
  async getSnapshot(...args: Parameters<typeof reportingService.getSnapshot>): Promise<any> {
    return reportingService.getSnapshot(...args);
  },

  /**
   * Publish residual risk snapshot
   */
  async getSnapshot_2(...args: Parameters<typeof reportingService.getSnapshot>): Promise<any> {
    return reportingService.getSnapshot(...args);
  },

  /**
   * Get cyber risk appetite
   */
  async getCyberRiskAppetite(...args: Parameters<typeof reportingService.getCyberRiskAppetite>): Promise<any> {
    return reportingService.getCyberRiskAppetite(...args);
  },

  /**
   * Update cyber risk appetite
   */
  async updateCyberRiskAppetite(...args: Parameters<typeof reportingService.updateCyberRiskAppetite>): Promise<any> {
    return reportingService.updateCyberRiskAppetite(...args);
  },

  /**
   * Assemble committee pack
   */
  async getCommitteePack(...args: Parameters<typeof reportingService.getCommitteePack>): Promise<any> {
    return reportingService.getCommitteePack(...args);
  }
};
