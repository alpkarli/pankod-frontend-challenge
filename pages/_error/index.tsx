import styles from "@StyleModules/Home.module.scss";
import { NextApiRequest, NextApiResponse } from "next";

function Error({ statusCode }: { statusCode: number }) {
	return (
		<main className={styles["main--sub"]}>
			<p>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on client"}
			</p>
		</main>
	);
}

Error.getInitialProps = ({ res, err }: { res: NextApiRequest, err: NextApiResponse}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
