import { Switch, Route, Link } from "react-router-dom";

import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/dashboard/edit">Edit</Link>
				</li>
				<li>
					<Link to="/dashboard/">Dashboard</Link>
				</li>
			</ul>

			<Route path="/dashboard/edit" component={Edit} />
			<Route path="/dashboard/" exact component={Stats} />
		</div>
	);
};

export default Dashboard;
