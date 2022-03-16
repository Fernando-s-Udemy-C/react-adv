import {
	BrowserRouter,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";
import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="react-logo" />
					<ul>
						<li>
							<NavLink
								to="/lazy1"
								activeClassName="nav-active"
							>
								Lazy1
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy2"
								activeClassName="nav-active"
							>
								Lazy2
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy3"
								activeClassName="nav-active"
							>
								Lazy3
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/lazy1" exact>
						<LazyPage1 />
					</Route>
					<Route path="/lazy2" exact>
						<LazyPage2 />
					</Route>
					<Route path="/lazy3" exact>
						<LazyPage3 />
					</Route>
					<Redirect to="/lazy1" />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
