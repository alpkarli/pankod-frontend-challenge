import { IEntry } from '@Components/Entry/IEntry';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

const data = require('./sample.json');

export default (_: NextApiRequest, res: NextApiResponse<IEntry.IProps>) => {
	res.statusCode = 200;
	res.json(data.entries.filter((entry: IEntry.IProps) => entry.releaseYear > 2010 && entry.programType === 'movie').slice(0, 21).sort());
};
