import { FC } from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<div>Hello main (new update!)</div>
			<Link to={"/popup"}>popup</Link>
		</Layout>
	);
};
