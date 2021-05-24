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



/**
 * 
 * @export
 * @interface TeamRelation
 */
export interface TeamRelation {
    /**
     * The unique id of the given team
     * @type {number}
     * @memberof TeamRelation
     */
    id: number;
    /**
     * The name of the given team
     * @type {string}
     * @memberof TeamRelation
     */
    name: string;
    /**
     * The URL to team\'s image
     * @type {string}
     * @memberof TeamRelation
     */
    photo_url: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof TeamRelation
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof TeamRelation
     */
    updated_at?: string;
}

