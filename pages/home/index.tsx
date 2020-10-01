import React from "react";
import { Entry } from "@Components/Entry";
import LinkWithComponent from "@Components/Link";
import styles from "@StyleModules/Home.module.scss";

const placeholderURL = "/images/placeholder.png";

const MoviesEntry = {
	title: "Movies",
	images: {
		"Poster Art": {
			url: placeholderURL,
		},
	},
};

const SeriesEntry = {
	title: "Series",
	images: {
		"Poster Art": {
			url: placeholderURL,
		},
	},
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<LinkWithComponent to="/movies">
					<Entry {...MoviesEntry}></Entry>
				</LinkWithComponent>
				<LinkWithComponent to="/series">
					<Entry {...SeriesEntry}></Entry>
				</LinkWithComponent>
			</div>
		</main>
	);
}
