import { IEntries, IAction } from "@Interfaces";
import { ActionConsts } from "@Definitions";

const entriesReducerDefaultState: IEntries.IStateProps = {
	entries: [],
	loading: false,
	error: "",
};

export const EntriesReducer = (
	state = entriesReducerDefaultState,
	action: IAction<IEntries.IEntriesPayload>
) => {
	switch (action.type) {
		case ActionConsts.Entries.SetEntries:
			return action.payload;
		case ActionConsts.Entries.FetchEntriesBegin:
			return {
                ...state,
                ...action.payload
			};
		case ActionConsts.Entries.FetchEntriesSuccess:
			return {
				...state,
				...action.payload
			};
		case ActionConsts.Entries.FetchEntriesFailure:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
