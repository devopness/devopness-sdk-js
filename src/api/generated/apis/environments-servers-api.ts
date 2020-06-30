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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { EnvironmentLinkItem } from '../../generated/models';

/**
 * EnvironmentsServersApiService - Auto-generated
 */
export class EnvironmentsServersApiService extends ApiBaseService {
    /**
     * 
     * @summary Link a server to an environment
     * @param {number} environmentId Unique ID of the environment
     * @param {number} serverId Unique ID of the server to be linked
     * @param {EnvironmentLinkItem} [environmentLinkItem] A JSON object containing environment server link optional parameters
     */
    public async linkServerToEnvironment(environmentId: number, serverId: number, environmentLinkItem?: EnvironmentLinkItem): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'linkServerToEnvironment');
        }
        if (serverId === null || serverId === undefined) {
            throw new ArgumentNullException('serverId', 'linkServerToEnvironment');
        }
        const response = await this.post <void, EnvironmentLinkItem>(`/environments/{environment_id}/servers/{server_id}/link`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))).replace(`{${"server_id"}}`, encodeURIComponent(String(serverId))), environmentLinkItem);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Replace all linked servers by new ones. Immediately deploying all changes to previously and newly linked servers
     * @param {number} environmentId Unique ID of the environment
     * @param {EnvironmentLinkItem} environmentLinkItem A JSON object containing environment server link parameters
     */
    public async replaceLinkedServers(environmentId: number, environmentLinkItem: EnvironmentLinkItem): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'replaceLinkedServers');
        }
        if (environmentLinkItem === null || environmentLinkItem === undefined) {
            throw new ArgumentNullException('environmentLinkItem', 'replaceLinkedServers');
        }
        const response = await this.post <void, EnvironmentLinkItem>(`/environments/{environment_id}/servers/replace-linked-servers`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))), environmentLinkItem);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Unlink/Remove a server from an environment
     * @param {number} environmentId Unique ID of the environment
     * @param {number} serverId Unique ID of the server to unlink
     * @param {EnvironmentLinkItem} [environmentLinkItem] A JSON object containing environment server unlink optional parameters
     */
    public async unlinkServerFromEnvironment(environmentId: number, serverId: number, environmentLinkItem?: EnvironmentLinkItem): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'unlinkServerFromEnvironment');
        }
        if (serverId === null || serverId === undefined) {
            throw new ArgumentNullException('serverId', 'unlinkServerFromEnvironment');
        }
        const response = await this.post <void, EnvironmentLinkItem>(`/environments/{environment_id}/servers/{server_id}/unlink`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))).replace(`{${"server_id"}}`, encodeURIComponent(String(serverId))), environmentLinkItem);
        return new ApiResponse(response);
    }
}