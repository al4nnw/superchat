import styles from "./searchbar.module.scss";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
	return (
		<div className={styles.searchBarWrapper}>
			<input
				className={styles.searchField}
				type="text"
				placeholder="Procure seus amigos"
			/>
			<div className={styles.iconWrapper}>
				<SearchIcon />
			</div>
		</div>
	);
}
