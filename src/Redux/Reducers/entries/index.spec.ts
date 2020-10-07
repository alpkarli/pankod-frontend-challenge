import entries from '@Test/fixtures/entries';
import { IAction, IEntries } from '@Interfaces';
import { ActionConsts } from "@Definitions";
import { EntriesReducer } from ".";

describe("Entries Reducer", () => {
    it("should return the initial state", () => {
        expect(
            EntriesReducer(undefined, {} as IAction<IEntries.IEntriesPayload>)
        ).toEqual({
            entries: [],
            loading: false,
            error: "",
        });
    });

    it("should handle SetReducer", () => {
        const state = EntriesReducer(undefined, {
            type: ActionConsts.Entries.SetEntries,
            payload: entries
        })
        expect(
            state
        ).toEqual(entries);
    });

    it("should handle FetchEntriesBegin", () => {
        expect(
            EntriesReducer(undefined, {
                type: ActionConsts.Entries.FetchEntriesBegin
            })
        ).toEqual({
            loading: false,
            error: "",
            entries: []
        });
    });

    it("should handle FetchEntriesSuccess", () => {
        expect(
            EntriesReducer(undefined, {
                type: ActionConsts.Entries.FetchEntriesSuccess,
                payload: {
                    loading: false,
                    entries,
                },
            })
        ).toEqual({
            loading: false,
            error: "",
			entries
		});
    });

    it("should handle FetchEntriesFailure", () => {
        expect(
            EntriesReducer(undefined, {
                type: ActionConsts.Entries.FetchEntriesFailure,
                payload: {
                    error: "error"
                }
            })
        ).toEqual({
            loading: false,
			error: "error",
			entries: [],
        });
    });
});