import React from "react";
import useSWR from "swr";
import { NextPage } from "next";
import { IMoviesPage } from "@Interfaces/Pages/Movies";
import { IEntry } from "@Interfaces";
import { Entry } from "@Components";
import styles from "@StyleModules/Home.module.scss";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Movies: NextPage<IMoviesPage.IProps> = () => {
	const { data: movies, error } = useSWR("/api/movies", fetcher);

	if (error) return (
		<main className={styles['main--sub']}>
			<div>Oops, something went wrong...</div>;
		</main>
	) 
	if (!movies) return(
		<main className={styles['main--sub']}>
			<div>Loading...</div>;
		</main>
	)

	return (
		<main className={styles['main--sub']}>
			<div className={styles.grid}>
				{movies.map((movie: IEntry.IProps) => (
					<Entry key={movie.title} {...movie} />
				))}
			</div>
		</main>
	);
};

export default Movies;
