import styles from "./message.module.scss";

export default function Message() {
	return (
		<div className={styles.messageCard}>
			<div className={styles.messageHeader}>
				<div>Alan Cesar Sousa</div>
				<div>13:30</div>
			</div>
			<div>First Message</div>
		</div>
	);
}
