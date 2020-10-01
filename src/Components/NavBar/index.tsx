import React from "react";
import Link from "next/link";
import styles from "@StyleModules/Header.module.scss";
import utils from "@StyleModules/Utils.module.scss";
import button from "@StyleModules/Button.module.scss";

import { INavbar } from "./Navbar";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
	return (
		<div className={styles.header}>
			<div className={utils["content-container"]}>
				<div className={styles.header__content}>
					<Link href="/dashboard">
						<h1 className={styles.header__title}>DEMO Streaming</h1>
					</Link>
					<div>
						<button
							className={`${button["button--link"]} ${button.button}`}
						>
							Log in
						</button>
						<button
							className={`${button.button} ${button["button--secondary"]} `}
						>
							Start your free trial
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Navbar };
