import { IEntry } from "@Interfaces";

export const EntrySelectorByTitle = (
	entries: IEntry.IProps[],
	title: string
): IEntry.IProps => {
    console.log(entries);
    console.log(title);
	return entries
		.find((entry: IEntry.IProps) => {
			entry.title.toLowerCase() === title.toLowerCase();
		});
};
