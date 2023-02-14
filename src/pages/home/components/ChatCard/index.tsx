import { useDispatch } from "react-redux";
import UserPhoto from "../../../../components/UserPhoto";
import { Chat } from "../../../../models/chat";
import { useAppDispatch } from "../../../../redux/hooks";
import { setOnChat } from "../../../../redux/slices/panelSlice";
import styles from "./chatcard.module.scss";

const ChatCard = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const chat: Chat = new Chat(["dkfjdlk", "df"], "", "", "");
	return (
		<div className={styles.root} onClick={() => dispatch(setOnChat(chat))}>
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
};

export default ChatCard;
