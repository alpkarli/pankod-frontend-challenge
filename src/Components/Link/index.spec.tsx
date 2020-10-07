import { create } from "react-test-renderer";
import { LinkWithComponent } from "@Components";

describe("LinkWithComponent", () => {
    it("should match snapshot", () => {
        const component = create(
        <LinkWithComponent to="/movies">
            Children
        </LinkWithComponent>
        );
        expect(component.toJSON()).toMatchSnapshot();
    })
});