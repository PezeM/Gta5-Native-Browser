import { ParamsList } from "./types";

export interface INativeParam {
    type: string,
    name: string
}
  
export interface INative {
    name: string;
    jhash: string;
    comment: string;
    params: ParamsList;
    return_type: string;
    build: string
}
  
export interface INativesCategory {
    [key: string]: INative
}
  
export interface INatives {
    [key: string]: INativesCategory
}
  