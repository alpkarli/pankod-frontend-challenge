import React from "react";
import styles from "@StyleModules/Entry.module.scss";
import { IEntry } from "./IEntry";


const Entry: React.FunctionComponent<IEntry.IProps | IEntry.IHomeProps> = (props): JSX.Element => {
	return (
		<div className={styles.entry__container}>
			<div className={styles.entry__content}>
				<h1 className={styles.entry__content__text}>{props.title.toUpperCase()}</h1>
				<img className={styles.entry__image} src={props.images['Poster Art'].url}></img>
			</div>
            <p className={styles.entry__container__text}>{props.title}</p>
		</div>
	);
};

export { Entry };


