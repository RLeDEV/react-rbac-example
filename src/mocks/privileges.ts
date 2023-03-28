import {TPrivileges} from "../types";
import {Features, Permissions} from "../enums";

export const PRIVILEGES_MOCKS: Record<Permissions, TPrivileges> = {
    [Permissions.read]: {
        [Features.FEATURE_A]: [Permissions.read],
    },
    [Permissions.write]: {
        [Features.FEATURE_A]: [Permissions.read, Permissions.write],
    },
    [Permissions.publish]: {
        [Features.FEATURE_A]: [Permissions.read, Permissions.write, Permissions.publish],
    },
}