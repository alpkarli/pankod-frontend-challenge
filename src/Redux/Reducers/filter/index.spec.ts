import { ActionConsts } from '@Definitions';
import { IAction, IFilter } from '@Interfaces';
import { FilterReducer } from ".";

describe("Filter Reducer", () => {
	it("should return the initial state", () => {
		expect(
			FilterReducer(undefined, {} as IAction<IFilter.IFilterPayload>)
		).toEqual({
			text: "",
			sortBy: "yearAsc",
		});
    });
    it("should handle ResetFilter", () => {
        //First Set Different Value
        FilterReducer(undefined, {
            type: ActionConsts.Filter.SortByYearDesc
        })
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.ResetFilter
            })
        ).toEqual({
            text: "",
            sortBy: "yearAsc",
        });
    });
    it("should handle SortByYearDesc", () => {
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.SortByYearDesc
            })
        ).toEqual({
            text: "",
            sortBy: "yearDesc",
        });
    });
    it("should handle SortByYearAsc", () => {
        //First Set Different Value
        FilterReducer(undefined, {
            type: ActionConsts.Filter.SortByYearDesc
        })
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.SortByYearAsc
            })
        ).toEqual({
            text: "",
            sortBy: "yearAsc",
        });
    });
    it("should handle SortByTitleDesc", () => {
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.SortByTitleDesc
            })
        ).toEqual({
            text: "",
            sortBy: "titleDesc",
        });
    });
    it("should handle SortByTitleAsc", () => {
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.SortByTitleAsc
            })
        ).toEqual({
            text: "",
            sortBy: "titleAsc",
        });
    });
    it("should handle SetTextFilter", () => {
        expect(
            FilterReducer(undefined, {
                type: ActionConsts.Filter.SetTextFilter,
                payload: "searchValue"
            })
        ).toEqual({
            text: "searchValue",
            sortBy: "yearAsc",
        });
    });
});
