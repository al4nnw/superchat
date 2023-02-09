import Logo from "../../components/Logo";
import Chat from "./components/Chat";
import ChatCard from "./components/ChatCard";
import ProfilePill from "./components/ProfilePill";
import SearchBar from "./components/SearchBar";
import styles from "./home.module.scss";

export default function Home() {
	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<nav className={styles.headerNav}>
					{" "}
					{Logo()}
					{ProfilePill()}
				</nav>
				{SearchBar()}
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
