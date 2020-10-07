import { ActionConsts } from ".";

describe("Action constants", () => {
    describe("Filter", () => {
        it("should have SET_TEXT_FILTER", () => {
            expect(ActionConsts.Filter.SetTextFilter).toBe("SET_TEXT_FILTER");
        });

        it("should have SORT_BY_YEAR_DESC", () => {
            expect(ActionConsts.Filter.SortByYearDesc).toBe("SORT_BY_YEAR_DESC");
        });

        it("should have SORT_BY_YEAR_ASC", () => {
            expect(ActionConsts.Filter.SortByYearAsc).toBe("SORT_BY_YEAR_ASC");
        });

        it("should have SORT_BY_TITLE_DESC", () => {
            expect(ActionConsts.Filter.SortByTitleDesc).toBe("SORT_BY_TITLE_DESC");
        });

        it("should have SORT_BY_TITLE_ASC", () => {
            expect(ActionConsts.Filter.SortByTitleAsc).toBe("SORT_BY_TITLE_ASC");
        });

        it("should have RESET_FILTER", () => {
            expect(ActionConsts.Filter.ResetFilter).toBe("RESET_FILTER");
        });
    });
    describe("Entries", () => {
        it("should have SET_ENTRIES", () => {
            expect(ActionConsts.Entries.SetEntries).toBe("SET_ENTRIES");
        });
        it("should have FETCH_ENTRIES_BEGIN", () => {
            expect(ActionConsts.Entries.FetchEntriesBegin).toBe("FETCH_ENTRIES_BEGIN");
        });
        it("should have FETCH_ENTRIES_SUCCESS", () => {
            expect(ActionConsts.Entries.FetchEntriesSuccess).toBe("FETCH_ENTRIES_SUCCESS");
        });
        it("should have FETCH_ENTRIES_FAILURE", () => {
            expect(ActionConsts.Entries.FetchEntriesFailure).toBe("FETCH_ENTRIES_FAILURE");
        });
    })
});
