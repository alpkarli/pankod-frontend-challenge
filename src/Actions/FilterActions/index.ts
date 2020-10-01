// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const FilterActions = {
	SetTextFilter: (text = "") => ({
		type: ActionConsts.Filter.SetTextFilter,
		text,
	}),

	sortByDate: () => ({
		type: ActionConsts.Filter.SortByDate,
	}),

	sortByAmount: () => ({
		type: ActionConsts.Filter.SortByAmount,
	}),

	setStartDate: (startDate: Date) => ({
		type: ActionConsts.Filter.SetStartDate,
		startDate,
	}),

	setEndDate: (endDate: Date) => ({
		type: ActionConsts.Filter.SetEndDate,
		endDate,
	}),
};
