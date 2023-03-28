import {Features} from "../enums";

export type TPermission = 'read' | 'write' | 'publish';

export type TPrivileges = {
    [key in Features]: TPermission[];
};

export interface IPermissionCache {
    [key: string]: TPermission[];
}