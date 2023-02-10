import { Photo } from "./photo";

export interface User {
	id: string;
	name: string;
	email: string;
	photo: Photo;
	countMessagesSent: number;
	countMessagesReceived: number;
}
