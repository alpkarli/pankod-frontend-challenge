import React, { ChangeEvent, useState } from "react";
import styles from "@StyleModules/Filters.module.scss";
import utils from "@StyleModules/Utils.module.scss";
import { FilterActions } from "@Actions";

import { IFilters } from "./Filters";
import { useDispatch } from "react-redux";

const Filters: React.FunctionComponent<IFilters.IProps> = (): JSX.Element => {
	const [inputControl, setInputControl] = useState(false);
	const dispatch = useDispatch();

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		switch (e.target.value) {
			case "yearDesc":
				dispatch(FilterActions.SortByYearDesc());
				break;
			case "yearAsc":
				dispatch(FilterActions.SortByYearAsc());
				break;
			case "titleDesc":
				dispatch(FilterActions.SortByTitleDesc());
				break;
			case "titleAsc":
				dispatch(FilterActions.SortByTitleAsc());
				break;
			default:
				break;
		}
	};

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length >= 3) {
			dispatch(FilterActions.SetTextFilter(e.target.value));
			setInputControl(true);
		}
		
		if (e.target.value.length < 3 && inputControl) {
			dispatch(FilterActions.SetTextFilter(''));
			setInputControl(false);
		}
	};

	return (
		<div className={styles.filters}>
			<div className={utils["content-container"]}>
				<div className={styles.filters__content}>
					<div className="col-xl-4 col-lg-8 col-md-12">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Search..."
								aria-label="Search"
								aria-describedby="Search"
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									handleSearch(e)
								}
							/>
							<div className="input-group-append">
								<button
									className="btn btn-primary"
									type="button"
								>
									<img
										src="images/lens.svg"
										className={styles.lens}
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-12 mt-4 mt-lg-0">
						<select
							defaultValue="yearAsc"
							className="form-control"
							id="filters"
							onChange={(e: ChangeEvent<HTMLSelectElement>) =>
								handleSelect(e)
							}
						>
							<option value="yearAsc">Sort by year in asc</option>
							<option value="yearDesc">Sort by year in desc</option>
							<option value="titleAsc">Sort by title in asc</option>
							<option value="titleDesc">Sort by title in desc</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Filters };
