import { IFilter, IEntry, IEntries } from "@Interfaces";

export const MoviesSelector = (
	entries: IEntry.IProps[],
	{ text, sortBy }: IFilter.IStateProps
) => {
	return entries
		.filter((entry: IEntry.IProps) => {
            const movie = entry.programType === 'movie';
			const textMatch = entry.title
				.toLowerCase()
				.includes(text.toLowerCase());
			return textMatch && movie;
		})
		.sort((a, b) => {
			if (sortBy === "yearDesc") {
				return a.releaseYear < b.releaseYear ? 1 : -1;
			} else if (sortBy === "yearAsc") {
				return a.releaseYear > b.releaseYear ? 1 : -1;
			} else if (sortBy === "titleDesc") {
                return a.title > b.title ? 1 : -1;
            } else {
                return a.title < b.title ? 1 : -1;
            } 
		}).slice(0, 21);
};
