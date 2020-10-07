import React from "react";
import { useRouter } from "next/router";
import styles from "@StyleModules/Header.module.scss";
import utils from "@StyleModules/Utils.module.scss";

import { ISubbar } from "./SubBar";

const selectTitle = (path: string) => {
	switch (path) {
		case "/home":
			return "Titles";
		case "/series":
			return "Series";
		case "/movies":
			return "Movies";
		default:
			return "Titles";;
	}
};

const Subbar: React.FunctionComponent<ISubbar.IProps> = (): JSX.Element => {
	const router = useRouter();
	const title = selectTitle(router.pathname);

	return (
		<div className={styles["sub-header"]}>
			<div className={utils["content-container"]}>
				<div className={styles.header__content}>
					<h2 className={styles["sub-header__title"]}>
						{`Popular ${title}`}
					</h2>
				</div>
			</div>
		</div>
	);
};

export { Subbar };
