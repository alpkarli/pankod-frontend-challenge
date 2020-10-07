import { create } from "react-test-renderer";
import { Navbar } from "@Components";

describe("Navbar", () => {
    it("should match snapshot", () => {
        const component = create(<Navbar />);
        expect(component.toJSON()).toMatchSnapshot();
    })
});