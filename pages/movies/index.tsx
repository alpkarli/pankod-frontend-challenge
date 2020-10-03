import React, { useEffect } from "react";
import { NextPage } from "next";
import { IEntry, IMoviesPage } from "@Interfaces";
import { Entry, Filters } from "@Components";
import styles from "@StyleModules/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MoviesSelector } from "@Redux/Selectors/movies";
import { IStore } from "@Redux/IStore";
import { EntriesActions, FilterActions } from "@Actions";

const Movies: NextPage<IMoviesPage.IProps> = () => {
	const dispatch = useDispatch();
	const entries = useSelector((state: IStore) => state.entries);
	const filter = useSelector((state: IStore) => state.filter);

	useEffect(() => {
		if (entries.entries.length === 0) {
			dispatch(EntriesActions.FetchEntries());
		}
		return () => {
			dispatch(FilterActions.ResetFilter());
		};
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

	const movies = MoviesSelector(entries.entries, filter);

	return (
		<main className={styles["main--sub"]}>
			<Filters />
			<div className={styles.grid}>
				{movies.map((movie: IEntry.IProps) => (
					<Entry key={movie.title} {...movie} />
				))}
			</div>
		</main>
	);
};

export default Movies;
