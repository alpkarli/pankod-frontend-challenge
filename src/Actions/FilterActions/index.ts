// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const FilterActions = {
	SetTextFilter: (text: string) => ({
		type: ActionConsts.Filter.SetTextFilter,
		payload: text,
	}),

	SortByYearDesc: () => ({
		type: ActionConsts.Filter.SortByYearDesc,
	}),

	SortByYearAsc: () => ({
		type: ActionConsts.Filter.SortByYearAsc,
	}),

	SortByTitleDesc: () => ({
		type: ActionConsts.Filter.SortByTitleDesc,
	}),

	SortByTitleAsc: () => ({
		type: ActionConsts.Filter.SortByTitleAsc,
	}),
};
