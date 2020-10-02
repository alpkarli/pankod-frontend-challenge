import React from "react";
import useSWR from "swr";
import { NextPage } from "next";
import { ISeriesPage } from "@Interfaces/Pages/Series";
import { IEntry } from "@Interfaces";
import { Entry, Filters } from "@Components";
import styles from "@StyleModules/Home.module.scss";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Series: NextPage<ISeriesPage.IProps> = () => {
	const { data: series, error } = useSWR("/api/series", fetcher);

	if (error) return (
		<main className={styles['main--sub']}>
			<div>Oops, something went wrong...</div>;
		</main>
	) 
	if (!series) return(
		<main className={styles['main--sub']}>
			<div>Loading...</div>;
		</main>
	)

	return (
		<main className={styles['main--sub']}>
			<Filters />
			<div className={styles.grid}>
				{series.map((serie: IEntry.IProps) => (
					<Entry key={serie.title} {...serie} />
				))}
			</div>
		</main>
	);
};

export default Series;
