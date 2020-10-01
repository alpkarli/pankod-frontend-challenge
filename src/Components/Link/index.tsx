import React from "react";
import Link from "next/link";

import { ILink } from "./Link";

// Forward Refs, is useful
export default React.forwardRef(({ to, children }: ILink.IProps, ref: any) => {
	return (
		<Link href={to} passHref>
			<a href={ref}>{children}</a>
		</Link>
	);
});
