import React, { useEffect } from "react";
import { MainEntry } from "@Components/Entry";
import { LinkWithComponent } from "@Components/Link";
import styles from "@StyleModules/Home.module.scss";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { EntriesActions } from "@Actions";
import { IHomePage, IStore } from "@Interfaces";
import { NextPage } from "next";

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

const Home: NextPage<IHomePage.IProps> = () => {
	const dispatch = useDispatch();
	const entries = useSelector((state: IStore) => state.entries);

	useEffect(() => {
		if (entries.entries.length === 0) {
			dispatch(EntriesActions.FetchEntries());
		}
	}, []);

	if (entries.error)
		return (
			<main className={styles["main--sub"]}>
				<div>Oops, something went wrong...</div>
			</main>
		);

	if (entries.loading) {
		return (
			<main className={styles["main--sub"]}>
				<div>Loading...</div>
			</main>
		);
	}

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
};

export default Home;
