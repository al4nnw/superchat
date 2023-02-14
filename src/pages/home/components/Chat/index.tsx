import UserPhoto from "../../../../components/UserPhoto";
import styles from "./chat.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Message from "./components/Message";
import MainInput from "../MainInput";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { db } from "../../../../App";
import { useAppDispatch } from "../../../../redux/hooks";
import { setClosed } from "../../../../redux/slices/panelSlice";

export default function ChatView() {
	const dispatch = useAppDispatch();

	function closeChat() {
		dispatch(setClosed());
	}

	return (
		<div className={styles.root}>
			<div className={styles.chatHeader}>
				<div className={styles.headerFirstPartWrapper}>
					<div className={styles.headerIconWrapper} onClick={() => closeChat()}>
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
				onSubmit: (value) => {
					/// set document
					addDoc(collection(db, "teste"), {
						value: value,
						time: serverTimestamp(),
					});
					return true;
				},
			})}
		</div>
	);
}
