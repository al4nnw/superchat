import UserPhoto from "../../../../components/UserPhoto";
import styles from "./chat.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import Message from "./components/Message";

export default function Chat() {
	return (
		<div className={styles.root}>
			<div className={styles.chatHeader}>
				<div className={styles.headerFirstPartWrapper}>
					<div className={styles.headerIconWrapper}>
						<CloseIcon />
					</div>
					<h4 className={styles.talkingTo}>Alan Cesar Sousa</h4>
				</div>
				{UserPhoto()}
			</div>
			<div className={styles.messagesChat}>
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
				{Message()}
			</div>
			<div className={styles.mainInputWrapper}>
				<input type="text" placeholder="Escreva sua mensagem" />
			</div>
		</div>
	);
}
