import { create } from "react-test-renderer";
import { Layout } from "@Components";

jest.mock("next/router", () => ({
	useRouter: () => ({
		pathname: "/home"
	}),
}));

describe("Layout", () => {
	it("should match snapshot", () => {

		const component = create(
			<Layout>
				<div>Content</div>
			</Layout>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

afterAll(() => jest.unmock('next/router'))