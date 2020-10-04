import { useRouter } from "next/router";
import styles from "@StyleModules/Home.module.scss";
import useSWR, { responseInterface } from "swr";
import { IEntry } from "@Interfaces";
import { EntryPageContent } from "@Components";

const fetcher = (url: string) => fetch(url).then(r =>{
	return r.json()
});

const Entry = () => {
    const router = useRouter();
    const { title } = router.query;
    
	const { data, error }: responseInterface<IEntry.IProps, any> = useSWR(title ? `/api/entry/${title}` : null, fetcher)
	
	if (error)
		return (
			<main className={styles["main--sub"]}>
				<div>Oops, something went wrong...</div>
			</main>
		);

	if (!data) {
		return (
			<main className={styles["main--sub"]}>
				<div>Loading...</div>
			</main>
		);
    }

	return (
		<>
			<EntryPageContent  {...data} />
		</>
	);
};

export default Entry;
