import React from "react";
import styles from "@StyleModules/Entry.module.scss";
import { IEntry } from "./IEntry";

const MainEntry: React.FunctionComponent<IEntry.IHomeProps> = (props): JSX.Element => {
	return (
		<div className={styles.entry__container}>
			<div className={styles.entry__content}>
				<h2 className={styles.entry__content__element}>{props.title.toUpperCase()}</h2>
				<img className={`${styles['entry__content__element--image']} ${styles.entry__content__element} `} src={props.images['Poster Art'].url}></img>
			</div>
            <p className={styles.entry__container__text}>Popular {props.title}</p>
		</div>
	);
};

const Entry: React.FunctionComponent<IEntry.IProps> = (props): JSX.Element => {
	return (
		<div className={styles.entry__container}>
			<div className={styles.entry__content}>
				<img className={styles.entry__image} src={props.images['Poster Art'].url}></img>
			</div>
            <p className={styles.entry__container__text}>{props.title}</p>
		</div>
	);
};

export { Entry, MainEntry };


