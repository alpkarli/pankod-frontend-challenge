import React, { useEffect } from "react";
import { NextPage } from "next";
import { IEntry, IStore, ISeriesPage } from "@Interfaces";
import { Entry, Filters, LinkWithComponent } from "@Components";
import styles from "@StyleModules/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SeriesSelector } from "@Redux/Selectors";
import { EntriesActions, FilterActions } from "@Actions";

const Series: NextPage<ISeriesPage.IProps> = () => {
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

	const series = SeriesSelector(entries.entries, filter);

	return (
		<main className={styles["main--sub"]}>
			<Filters />
			<div className={styles.grid}>
				{series.map((serie: IEntry.IProps) => (
					<LinkWithComponent key={serie.title} as={`/entry/${encodeURIComponent(serie.title)}`} to={'/entry/[title]'}>
						<Entry  {...serie} />
					</LinkWithComponent>
				))}
			</div>
		</main>
	);
};

export default Series;
