import { IEntry } from "@Interfaces";
// #region Local Imports
import { ActionConsts } from "@Definitions";
import { Dispatch } from "redux";
// #endregion Local Imports


export const EntriesActions = {
	SetEntries: (entries: IEntry.IProps[]) => ({
		type: ActionConsts.Entries.SetEntries,
		payload: entries,
	}),
	FetchEntriesBegin: () => ({
		type: ActionConsts.Entries.FetchEntriesBegin,
		payload: {
			loading: true,
			error: null,
		},
	}),
	FetchEntriesSuccess: (entries: IEntry.IProps[]) => ({
		type: ActionConsts.Entries.FetchEntriesSuccess,
		payload: {
			loading: false,
			entries,
		},
	}),
	FetchEntriesFailure: (error: string) => ({
		type: ActionConsts.Entries.FetchEntriesFailure,
		payload: {
			loading: false,
			error,
			entries: [],
		},
	}),
	FetchEntries: () => async (dispatch: Dispatch) => {
		dispatch(EntriesActions.FetchEntriesBegin());
		return fetch("/api/entries")
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(EntriesActions.FetchEntriesSuccess(json));
				return json;
			})
			.catch((error) => dispatch(EntriesActions.FetchEntriesFailure(error)));
	},
};

function handleErrors(response: any) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
