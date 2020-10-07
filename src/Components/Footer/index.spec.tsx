import { create } from "react-test-renderer";
import { Footer } from "@Components";

describe("Footer", () => {
    it("should match snapshot", () => {
        const component = create(<Footer />);
        expect(component.toJSON()).toMatchSnapshot();
    })
});