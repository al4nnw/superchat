import ChatCard from "../ChatCard";
import styles from "./contactsPanel.module.scss";

export default function ContactsPanel() {
	return (
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
	);
}
