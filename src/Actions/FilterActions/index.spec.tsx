import { FilterActions } from "@Actions";
import { ActionConsts } from "@Definitions";

describe("Filter Actions Tests", () => {
	test("should generate set text filter object with text value", () => {
		const text = "searchValue";
		const action = FilterActions.SetTextFilter(text);
		expect(action).toEqual({
			type: ActionConsts.Filter.SetTextFilter,
			payload: text,
		});
	});
	test("should generate set text filter object with default", () => {
		const action = FilterActions.SetTextFilter();
		expect(action).toEqual({
			type: ActionConsts.Filter.SetTextFilter,
			payload: "",
		});
	});
	test("should generate reset filter object", () => {
		const action = FilterActions.ResetFilter();
		expect(action).toEqual({
			type: ActionConsts.Filter.ResetFilter,
		});
	});
	test("should generate action object for sort by year desc", () => {
		expect(FilterActions.SortByYearDesc()).toEqual({
			type: ActionConsts.Filter.SortByYearDesc,
		});
	});
	test("should generate action object for sort by year asc", () => {
		expect(FilterActions.SortByYearAsc()).toEqual({
			type: ActionConsts.Filter.SortByYearAsc,
		});
	});
	test("should generate action object for sort by title desc", () => {
		expect(FilterActions.SortByTitleDesc()).toEqual({
			type: ActionConsts.Filter.SortByTitleDesc,
		});
	});
	test("should generate action object for sort by title asc", () => {
		expect(FilterActions.SortByTitleAsc()).toEqual({
			type: ActionConsts.Filter.SortByTitleAsc,
		});
	});
});
