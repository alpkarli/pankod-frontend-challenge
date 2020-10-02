import { IFilter, IAction } from "@Interfaces";
import { ActionConsts } from "@Definitions";

const filtersReducerDefaultState: IFilter.IStateProps = {
	text: "",
	sortBy: "yearDesc"
};

export const FilterReducer = (state = filtersReducerDefaultState, action: IAction<IFilter.IFilterPayload>) => {
	switch (action.type) {
		case ActionConsts.Filter.SetTextFilter:
			console.log(action.payload);
			
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
		default:
			return state;
	}
};
