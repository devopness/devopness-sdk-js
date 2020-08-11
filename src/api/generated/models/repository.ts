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


import { RepositoryBranch } from './repository-branch';

/**
 * 
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * The name of the repository
     * @type {string}
     * @memberof Repository
     */
    name?: string;
    /**
     * The name of the user/account on the Version Control System
     * @type {string}
     * @memberof Repository
     */
    user_name?: string;
    /**
     * The fully qualified repository name. Usually composed of user_name/name
     * @type {string}
     * @memberof Repository
     */
    full_name?: string;
    /**
     * The URL for viewing repository details on the provider\'s web application
     * @type {string}
     * @memberof Repository
     */
    html_url?: string;
    /**
     * 
     * @type {Array<RepositoryBranch>}
     * @memberof Repository
     */
    branches?: Array<RepositoryBranch>;
}

