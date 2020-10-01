declare namespace IFilter {
	export interface IFilterPayload {}

	export interface IStateProps {
		text: string;
		sortBy: string;
		startDate: Date;
		endDate: Date;
	}
}

export { IFilter };