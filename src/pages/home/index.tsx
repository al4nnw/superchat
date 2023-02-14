import Logo from "../../components/Logo";
import ChatCard from "./components/ChatCard";
import ProfilePill from "./components/ProfilePill";
import SearchBar from "./components/MainInput";
import styles from "./home.module.scss";

import SearchIcon from "@mui/icons-material/Search";
import ChatRoot from "./components/Chat/routing";
import ContactsPanel from "./components/ContactsPanel";

export default function Home() {
	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<nav className={styles.headerNav}>
					{" "}
					{Logo()}
					{ProfilePill()}
				</nav>
				{SearchBar({
					id: "searchBar",
					icon: SearchIcon,
					placeholder: "Procure seus amigos",
					onSubmit: (value) => {
						console.log(value);
						return false;
					},
				})}
			</header>
			<div className={styles.contentRoot}>
				<ContactsPanel />
				<div className={styles.chatRoot}>{ChatRoot()}</div>
			</div>
		</div>
	);
}
