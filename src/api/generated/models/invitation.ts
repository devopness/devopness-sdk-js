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


import { InvitationStatus } from './invitation-status';
import { TeamRelation } from './team-relation';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface Invitation
 */
export interface Invitation {
    /**
     * The unique UUID of the given invitation
     * @type {string}
     * @memberof Invitation
     */
    id: string;
    /**
     * 
     * @type {InvitationStatus}
     * @memberof Invitation
     */
    status: InvitationStatus;
    /**
     * The role to be assigned to the invited user after the invitation is accepted
     * @type {string}
     * @memberof Invitation
     */
    role: string;
    /**
     * The email of the user that has been invited to team
     * @type {string}
     * @memberof Invitation
     */
    email: string;
    /**
     * The IP of the user who accepted the invitation
     * @type {string}
     * @memberof Invitation
     */
    accepted_from_ip?: string | null;
    /**
     * 
     * @type {UserRelation}
     * @memberof Invitation
     */
    created_by_user?: UserRelation;
    /**
     * 
     * @type {UserRelation}
     * @memberof Invitation
     */
    user?: UserRelation;
    /**
     * 
     * @type {TeamRelation}
     * @memberof Invitation
     */
    team?: TeamRelation;
    /**
     * The date and time when the invitation will expire
     * @type {string}
     * @memberof Invitation
     */
    expires_at?: string;
    /**
     * The date and time when the invitation was accepted
     * @type {string}
     * @memberof Invitation
     */
    accepted_at?: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Invitation
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Invitation
     */
    updated_at?: string;
}

