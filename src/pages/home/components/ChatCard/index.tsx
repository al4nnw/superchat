import UserPhoto from "../../../../components/UserPhoto";
import styles from "./chatcard.module.scss";

export default function ChatCard() {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				{UserPhoto()}
				<div>
					<h3>Dona Maria</h3>
					<p className={styles.messagePreview} aria-label="Prévia da mensagem.">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						error quisquam, facere consequatur ipsam ex nisi
					</p>
				</div>
				<p aria-label="Horário da mensagem" className={styles.time}>
					13:58
				</p>
			</div>
		</div>
	);
}
