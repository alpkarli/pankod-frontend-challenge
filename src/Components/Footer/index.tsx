import React from "react";
import styles from "@StyleModules/Footer.module.scss";
import utils from "@StyleModules/Utils.module.scss";

import { IFooter } from "./Footer";

const Footer: React.FunctionComponent<IFooter.IProps> = (): JSX.Element => {
	return (
		<div className={styles.footer}>
			<div className={utils["content-container"]}>
				<div className={styles.footer__content}>
					<div className={styles["footer__content--text"]}>
						Home |&nbsp;
						Terms and Conditions |&nbsp;
						Privacy Policy |&nbsp;
						Collection Statement |&nbsp;
						Help |&nbsp;
						Manage Account
					</div>
					<div>
						<p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
					</div>
					<div className={styles["footer__content--logo"]}>
						<div className={styles["footer__content--social"]}>
							<img src="/images/social/facebook-white.svg" className={styles.social} />
							<img src="/images/social/twitter-white.svg" className={styles.social} />
							<img src="/images/social/instagram-white.svg" className={styles.social} />
						</div>
						<div className={styles["footer__content--store"]}>
							<img src="/images/store/app-store.svg" className={styles.store} />
							<img src="/images/store/play-store.svg" className={styles.store} />
							<img src="/images/store/windows-store.svg" className={styles.store} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Footer };
