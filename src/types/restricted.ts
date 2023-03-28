import React from "react";
import {Features} from "../enums";
import {TPermission} from "./permissions";

export interface IRestrictedProps {
    feature: Features;
    permission: TPermission;
    fallback?: JSX.Element | string;
    loadingComponent?: JSX.Element | string;
    children: React.ReactNode | React.ReactFragment | React.ReactPortal;
}