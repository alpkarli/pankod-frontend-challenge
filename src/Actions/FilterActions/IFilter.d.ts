declare namespace IFilter {
	export interface IFilterPayload {
		payload: any
	}

	export interface IStateProps {
		text: string;
		sortBy: string;
	}
}

export { IFilter };