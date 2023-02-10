import { Message } from "./message";

interface IChatRepository {
	members: string[];
	messages: Message[];
}

export class ChatRepository implements IChatRepository {
	members: string[];
	messages: Message[];

	constructor(members: string[]) {
		this.members = members;
		this.messages = [];
	}
}
