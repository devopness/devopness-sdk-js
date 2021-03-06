/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HookRequestRelation } from './hook-request-relation';

/**
 * The incoming and outgoing hook request linked to this action
 * @export
 * @interface ActionHookRequest
 */
export interface ActionHookRequest {
    /**
     * 
     * @type {HookRequestRelation}
     * @memberof ActionHookRequest
     */
    incoming?: HookRequestRelation | null;
    /**
     * 
     * @type {HookRequestRelation}
     * @memberof ActionHookRequest
     */
    outgoing?: HookRequestRelation | null;
}

