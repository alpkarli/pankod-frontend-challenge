import { Filters } from "@Components";
import {
	act,
	create,
	ReactTestInstance,
	ReactTestRenderer,
} from "react-test-renderer";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
	useDispatch: () => mockDispatch,
}));

describe("Filters", () => {
	let component: ReactTestRenderer;
	let instance: ReactTestInstance;
	beforeEach(() => {
		act(() => {
			component = create(<Filters />);
		});
		instance = component.root;
	});
	it("should match snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot();
	});
	it("should handle select titleDesc", () => {
		const event = {
			preventDefault() {},
			target: { value: "titleDesc" },
		};
		const select = instance.findByType("select");
		act(() => {
			select.props.onChange(event);
		});
		expect(select.props.value).toBe("titleDesc");
	});
	it("should handle select yearDesc", () => {
		const event = {
			preventDefault() {},
			target: { value: "yearDesc" },
		};
		const select = instance.findByType("select");
		act(() => {
			select.props.onChange(event);
		});
		expect(select.props.value).toBe("yearDesc");
	});
	it("should handle select yearAsc", () => {
		const event = {
			preventDefault() {},
			target: { value: "yearAsc" },
		};
		const select = instance.findByType("select");
		act(() => {
			select.props.onChange(event);
		});
		expect(select.props.value).toBe("yearAsc");
	});
	it("should handle select titleAsc", () => {
		const event = {
			preventDefault() {},
			target: { value: "titleAsc" },
		};
		const select = instance.findByType("select");
		act(() => {
			select.props.onChange(event);
		});
		expect(select.props.value).toBe("titleAsc");
	});
	it("should handle text change", () => {
		const event = {
			preventDefault() {},
			target: { value: "search" },
		};
		const input = instance.findByType("input");
		act(() => {
			input.props.onChange(event);
		});
		expect(input.props.value).toBe("search");
	});
	/* it("should handle text change if length lesser than 3", () => {
		const value = document.getElementById('value')
		const event = {
			preventDefault() {},
			target: { value: "se" },
		};
		const input = instance.findByType("input");
		act(() => {
			input.props.onChange(event);
		});
		
		expect(input.props.value).toBe("se");
	}); */
});
