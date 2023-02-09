import styles from "./logo.module.scss";
export default function Logo() {
	return (
		<div className={styles.logoRoot}>
			<h3 className={styles.logoContent}>SUPERCHAT</h3>
		</div>
	);
}
