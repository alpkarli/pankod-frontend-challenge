import { IFilter, IEntries } from "@Interfaces";

export interface IStore {
    entries: IEntries.IStateProps;
    filter: IFilter.IStateProps;
}
