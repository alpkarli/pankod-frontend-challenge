import React from "react";
import Link from "next/link";
import styles from "@StyleModules/Footer.module.scss";
import utils from "@StyleModules/Utils.module.scss";
import button from "@StyleModules/Button.module.scss";

import { IFooter } from "./Footer";

const Footer: React.FunctionComponent<IFooter.IProps> = (): JSX.Element => {
	return (
		<div className={styles.footer}>
			<div className={utils["content-container"]}>
				<div className={styles.footer__content}>
					Footer
				</div>
			</div>
		</div>
	);
};

export { Footer };
