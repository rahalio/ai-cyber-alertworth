/**
 * Events Domain Facade
 *
 * High-level API for events domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { eventsService } from "./events.service";
// TODO: Import types
// import type { ... } from "./events.api-types";

/**
 * Events Facade
 *
 * High-level API for events operations.
 * Components should use this facade instead of services directly.
 */
export const eventsFacade = {
  /**
   * List security events
   */
  async getEvent(...args: Parameters<typeof eventsService.getEvent>): Promise<any> {
    return eventsService.getEvent(...args);
  },

  /**
   * Ingest a security event
   */
  async getEvent_2(...args: Parameters<typeof eventsService.getEvent>): Promise<any> {
    return eventsService.getEvent(...args);
  }
};
