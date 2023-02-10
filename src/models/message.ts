import { MediaType } from "./mediaType";

export interface Message {
	content: string;
	mediaType?: MediaType;
	createdAt: string;
	messageUID: string; // used to store if message has been read
	senderUID: string;
}
