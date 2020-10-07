import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { EntriesActions, handleErrors } from "@Actions";
import { ActionConsts } from "@Definitions";
import entries from "@Test/fixtures/entries";


const createMockStore = configureMockStore([thunk]);

let store: MockStoreEnhanced<unknown, {}>;
describe("Entries Actions Tests", () => {
	beforeEach(() => {
        
		store = createMockStore();
	});

	test("Set Entries Test", () => {
		const entry = entries[0];
		store.dispatch(EntriesActions.SetEntries([entry]));
		expect(store.getActions()).toEqual([
			{
				type: ActionConsts.Entries.SetEntries,
				payload: [entry],
			},
		]);
	});

	test("Fetch Entries Begin Test", () => {
		store.dispatch(EntriesActions.FetchEntriesBegin());
		expect(store.getActions()).toEqual([
			{
				type: ActionConsts.Entries.FetchEntriesBegin,
				payload: {
					loading: true,
					error: null,
				},
			},
		]);
	});

	test("Fetch Entries Success Test", () => {
		const slicedEntries = entries.slice(0, 2);
		store.dispatch(EntriesActions.FetchEntriesSuccess(slicedEntries));
		expect(store.getActions()).toEqual([
			{
				type: ActionConsts.Entries.FetchEntriesSuccess,
				payload: {
					loading: false,
					entries: slicedEntries,
				},
			},
		]);
	});

	test("Fetch Entries Failure Test", () => {
		store.dispatch(EntriesActions.FetchEntriesFailure("error"));
		expect(store.getActions()).toEqual([
			{
				type: ActionConsts.Entries.FetchEntriesFailure,
				payload: {
					loading: false,
					error: "error",
					entries: [],
				},
			},
		]);
	});

	test("Success Fetch Entries Test", async () => {
		const fetchPromise: any = Promise.resolve({
            status: 200,
            statusText: "OK",
            ok: true,
            json: () => Promise.resolve(entries[2]),
        });
        global.fetch = () => fetchPromise;

        await store.dispatch(EntriesActions.FetchEntries() as any);

		expect(store.getActions()[0]).toEqual(
			{
				type: ActionConsts.Entries.FetchEntriesBegin,
				payload: {
					loading: true,
					error: null,
				},
			},
        );
        
        expect(store.getActions()[1]).toEqual(
			{
				type: ActionConsts.Entries.FetchEntriesSuccess,
				payload: {
					loading: false,
					entries: entries[2],
				},
			},
		);
	});

	test("Fail Fetch Entries Test", async () => {
        const fetchPromise = Promise.reject("error");
        global.fetch = () => fetchPromise;

        await store.dispatch(EntriesActions.FetchEntries() as any);
        
		expect(store.getActions()[0]).toEqual(
			{
				type: ActionConsts.Entries.FetchEntriesBegin,
				payload: {
					loading: true,
					error: null,
				},
			},
        );
        
        expect(store.getActions()[1]).toEqual(
			{
				type: ActionConsts.Entries.FetchEntriesFailure,
				payload: {
					loading: false,
					error: "error",
					entries: [],
				},
			},
		);
    });
    
    test("test handle errors function with success", () =>{
        const response = {
            status: 200,
            statusText: "OK",
            ok: true
        }
        expect(handleErrors(response)).toEqual(response);
    })

    test("test handle errors function with error", () =>{
        const response = {
            status: 500,
            statusText: "ERROR",
            ok: false
        }
        expect(() => handleErrors(response)).toThrowError('ERROR');

    })
});
