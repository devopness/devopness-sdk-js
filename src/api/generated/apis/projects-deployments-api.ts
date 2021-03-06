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
import { DeploymentRelation } from '../../generated/models';

/**
 * ProjectsDeploymentsApiService - Auto-generated
 */
export class ProjectsDeploymentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Returns a list of all deployments belonging to a project
     * @param {number} projectId Numeric ID of the project to get deployments from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectDeployments(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<DeploymentRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectDeployments');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/deployments' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<DeploymentRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
