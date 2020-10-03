import { entries } from '@Pages/api/entries';
import { IEntry } from '@Interfaces';

declare namespace IEntries {
	export interface IEntriesPayload {
	}

	export interface IStateProps {
		entries: IEntry.IProps[];
		loading: boolean;
		error: string;
	}
}

export { IEntries };