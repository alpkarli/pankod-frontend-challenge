import React, { RefObject } from "react";
import Link from "next/link";

import { ILink } from "./Link";

// Forward Refs, is useful
const LinkWithComponent =  React.forwardRef(({ to, children }: ILink.IProps, ref: any) => {
	return (
		<Link href={to} passHref>
			<a href={to}>
				{children}
			</a>
		</Link>
	);
});

export { LinkWithComponent }