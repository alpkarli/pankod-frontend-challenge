import React from "react";
import { MainEntry } from "@Components/Entry";
import { LinkWithComponent } from "@Components/Link";
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
					<MainEntry {...MoviesEntry}></MainEntry>
				</LinkWithComponent>
				<LinkWithComponent to="/series">
					<MainEntry {...SeriesEntry}></MainEntry>
				</LinkWithComponent>
			</div>
		</main>
	);
}
