import { create, ReactTestRenderer } from "react-test-renderer";
import { Subbar } from "@Components";

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe("Subbar", () => {
	let component: ReactTestRenderer;
	it("should match snapshot", () => {
		useRouter.mockImplementationOnce(() => ({
			pathname: "/home"
		}))
		component = create(<Subbar />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it("should change title by router", () => {
		useRouter.mockImplementationOnce(() => ({
			pathname: "/series"
		}))
		component = create(<Subbar />);
		expect(
			component.root.findByType('h2')
				.children
		).toEqual(["Popular Series"]);
	});
	it("should change title to movies by router", () => {
		useRouter.mockImplementationOnce(() => ({
			pathname: "/movies"
		}))
		
		component = create(<Subbar />);

		expect(
			component.root.findByType('h2')
				.children
		).toEqual(["Popular Movies"]);
	});
	it("should work with default", () => {
		useRouter.mockImplementationOnce(() => ({
			pathname: "/entry/a"
		}))
		
		component = create(<Subbar />);

		expect(
			component.root.findByType('h2')
				.children
		).toEqual(["Popular Titles"]);
	});
});
