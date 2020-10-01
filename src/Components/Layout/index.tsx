import React from "react";
import Head from "next/head";
import styles from "@StyleModules/Home.module.scss";
import { Footer, Navbar } from "@Components";
import { LayoutProps } from "./Layout";
import { Subbar } from "@Components/SubBar";

const Layout: React.FunctionComponent<LayoutProps> = ({
	children,
}): JSX.Element => {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<Navbar />
				<Subbar />
				<Head>
					<title>Pankod Frontend Challenge</title>
					<link rel="icon" href="images/favicon.ico" />
				</Head>
				{children}
				<Footer />
			</div>
		</div>
	);
};

export { Layout };
