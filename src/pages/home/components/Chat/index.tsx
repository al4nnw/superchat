import UserPhoto from "../../../../components/UserPhoto";
import styles from "./chat.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Message from "./components/Message";
import MainInput from "../MainInput";

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
			{MainInput({
				id: "chatInput",
				icon: SendIcon,
				placeholder: "Escreva uma mensagem",
				onSubmit: (value) => console.log(value),
			})}
		</div>
	);
}
