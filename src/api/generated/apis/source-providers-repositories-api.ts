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
import { Repository } from '../../generated/models';

/**
 * SourceProvidersRepositoriesApiService - Auto-generated
 */
export class SourceProvidersRepositoriesApiService extends ApiBaseService {
    /**
     * 
     * @summary Get details of a repository, by its name
     * @param {number} sourceProviderId Unique ID of the provider where the repository is hosted
     * @param {string} repositoryOwner Nickname/user id of the owner of the repository
     * @param {string} repositoryName The name of the repository to be retrieved
     */
    public async getRepository(sourceProviderId: number, repositoryOwner: string, repositoryName: string): Promise<ApiResponse<Repository>> {
        if (sourceProviderId === null || sourceProviderId === undefined) {
            throw new ArgumentNullException('sourceProviderId', 'getRepository');
        }
        if (repositoryOwner === null || repositoryOwner === undefined) {
            throw new ArgumentNullException('repositoryOwner', 'getRepository');
        }
        if (repositoryName === null || repositoryName === undefined) {
            throw new ArgumentNullException('repositoryName', 'getRepository');
        }
        const response = await this.get <Repository>(`/source-providers/{source_provider_id}/repositories/{repository_owner}/{repository_name}`.replace(`{${"source_provider_id"}}`, encodeURIComponent(String(sourceProviderId))).replace(`{${"repository_owner"}}`, encodeURIComponent(String(repositoryOwner))).replace(`{${"repository_name"}}`, encodeURIComponent(String(repositoryName))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all repositories belonging to a current user social provider account
     * @param {number} sourceProviderId Unique ID of the provider where the repository is hosted
     */
    public async listRepositories(sourceProviderId: number): Promise<ApiResponse<Array<Repository>>> {
        if (sourceProviderId === null || sourceProviderId === undefined) {
            throw new ArgumentNullException('sourceProviderId', 'listRepositories');
        }
        const response = await this.get <Array<Repository>>(`/source-providers/{source_provider_id}/repositories`.replace(`{${"source_provider_id"}}`, encodeURIComponent(String(sourceProviderId))));
        return new ApiResponse(response);
    }
}
