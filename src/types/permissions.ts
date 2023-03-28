import {Features} from "../enums";

export type TPermission = 'read' | 'write' | 'publish' | 'disabled';

export type TPrivileges = {
    [key in Features]: TPermission[];
};

export interface IPermissionCache {
    [key: string]: TPermission[];
}