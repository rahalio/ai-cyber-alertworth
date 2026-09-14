/**
 * Indicators Domain Facade
 *
 * High-level API for indicators domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { indicatorsService } from "./indicators.service";
// TODO: Import types
// import type { ... } from "./indicators.api-types";

/**
 * Indicators Facade
 *
 * High-level API for indicators operations.
 * Components should use this facade instead of services directly.
 */
export const indicatorsFacade = {
  /**
   * List key risk indicators
   */
  async getKri(...args: Parameters<typeof indicatorsService.getKri>): Promise<any> {
    return indicatorsService.getKri(...args);
  },

  /**
   * Define a key risk indicator
   */
  async getKri_2(...args: Parameters<typeof indicatorsService.getKri>): Promise<any> {
    return indicatorsService.getKri(...args);
  },

  /**
   * Refresh KRI evidence
   */
  async updateRefresh(...args: Parameters<typeof indicatorsService.updateRefresh>): Promise<any> {
    return indicatorsService.updateRefresh(...args);
  }
};
