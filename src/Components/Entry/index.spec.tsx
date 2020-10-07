import { create } from "react-test-renderer";
import { Entry, MainEntry, EntryPageContent } from "@Components";

const entryProps = {
	title: "Movie1",
	description: "Lorem Ipsum",
	programType: "Movie",
	releaseYear: 2011,
	images: {
		"Poster Art": {
			url: "abc.com/image.jpeg",
		},
	},
};

describe("Entry Components", () => {
	describe("Entry", () => {
		it("should match snapshot", () => {
			const component = create(<Entry {...entryProps} />);
			expect(component.toJSON()).toMatchSnapshot();
			/*  const entryInstance = entry.getInstance();
            expect(entryInstance).toEqual('Movie1'); */
    });
    it("should have the props", () => {

    })
	});
	describe("MainEntry", () => {
		it("should match snapshot", () => {
			const component = create(<MainEntry {...entryProps} />);
			expect(component.toJSON()).toMatchSnapshot();
		});
	});
	describe("EntryPageContent", () => {
		it("should match snapshot", () => {
			const component = create(<EntryPageContent {...entryProps} />);
			expect(component.toJSON()).toMatchSnapshot();
		});
	});
});
