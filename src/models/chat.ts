import { ChatRepository } from "./chatRepository";

export interface IChat {
	members: string[];
	groupChatName?: string;
	startDate: string;
	lastMessage?: string;
}

export class Chat implements IChat {
	members: string[];
	groupChatName?: string;
	startDate: string;
	lastMessage?: string;
	chatRepository?: ChatRepository;
	constructor(
		members: string[],
		startDate: string,
		groupChatName?: string,
		lastMessage?: string
	) {
		this.members = members;
		this.chatRepository = new ChatRepository(members);
		this.groupChatName = groupChatName;
		this.startDate = startDate;
		this.lastMessage = lastMessage;
	}
}
