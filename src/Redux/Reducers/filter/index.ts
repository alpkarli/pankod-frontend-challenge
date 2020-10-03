import { IFilter, IAction } from "@Interfaces";
import { ActionConsts } from "@Definitions";

const filtersReducerDefaultState: IFilter.IStateProps = {
	text: "",
	sortBy: "yearAsc",
};

export const FilterReducer = (
	state = filtersReducerDefaultState,
	action: IAction<IFilter.IFilterPayload>
) => {
	switch (action.type) {
		case ActionConsts.Filter.SetTextFilter:
			return {
				...state,
				text: action.payload,
			};
		case ActionConsts.Filter.SortByYearDesc:
			return {
				...state,
				sortBy: "yearDesc",
			};
		case ActionConsts.Filter.SortByYearAsc:
			return {
				...state,
				sortBy: "yearAsc",
			};
		case ActionConsts.Filter.SortByTitleDesc:
			return {
				...state,
				sortBy: "titleDesc",
			};
		case ActionConsts.Filter.SortByTitleAsc:
			return {
				...state,
				sortBy: "titleAsc",
			};
		case ActionConsts.Filter.ResetFilter:
			return {
				...state,
				...filtersReducerDefaultState
			};
		default:
			return state;
	}
};
