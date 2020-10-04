import { IEntry } from "@Components/Entry/IEntry";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

const data = require("../sample.json");

export default (_: NextApiRequest, res: NextApiResponse<IEntry.IProps>) => {
	const {
		query: { title },
    } = _;

	// throw Error('error');
	res.statusCode = 200;
	res.json(
		data.entries.find((entry: IEntry.IProps) => entry.title === title)
	);
};
