import * as React from 'react';
import { INatives } from './constans/interfaces';

export interface IAppContext {
    filterText: string;
    searchOnlyInOpenedCategories: boolean;
    natives: INatives;
    changeFilterText: (text: string) => void;
    changeSearchOnlyInOpenedCategories: (value: boolean) => void;
}

const context = React.createContext<IAppContext | null>(null);
export const AppContext = context;
export const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;
