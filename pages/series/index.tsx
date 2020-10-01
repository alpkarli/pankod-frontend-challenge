import React from "react";
import useSWR from "swr";
import { NextPage } from "next";
import { ISeriesPage } from "@Interfaces/Pages/Series";
import { IEntry } from "@Interfaces";
import { Entry } from "@Components";
import styles from "@StyleModules/Home.module.scss";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Series: NextPage<ISeriesPage.IProps> = () => {
	const { data: series, error } = useSWR("/api/series", fetcher);

	if (error) return <div>failed to load</div>;
	if (!series) return <div>loading...</div>;

	return (
		<main className={styles['main--sub']}>
			<div className={styles.grid}>
				{series.map((serie: IEntry.IProps) => (
					<Entry key={serie.title} {...serie} />
				))}
			</div>
		</main>
	);
};

export default Series;
