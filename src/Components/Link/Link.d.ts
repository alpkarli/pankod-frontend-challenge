// allow this component to accept all properties of "a" tag
declare namespace ILink {
	interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
		to: string;
		as?: string;
		// we can add more properties we need from next/link in the future
	}
}

export { ILink };
