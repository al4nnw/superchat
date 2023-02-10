import Logo from "../../components/Logo";
import Chat from "./components/Chat";
import ChatCard from "./components/ChatCard";
import ProfilePill from "./components/ProfilePill";
import SearchBar from "./components/MainInput";
import styles from "./home.module.scss";

import SearchIcon from "@mui/icons-material/Search";

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
					onSubmit: (value) => console.log(value),
				})}
			</header>
			<div className={styles.contentRoot}>
				<div className={styles.contacts}>
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
					{ChatCard()}
				</div>
				<div className={styles.chatRoot}>{Chat()}</div>
			</div>
		</div>
	);
}
