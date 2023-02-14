import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Chat } from "../../models/chat";

// Define a type for the slice state
export enum PanelStateOptions {
	closed,
	onChat,
}
interface PanelState {
	state: PanelStateOptions;
	chatInfo?: Chat;
}

// Define the initial state using that type
const initialState: PanelState = {
	state: PanelStateOptions.closed,
	chatInfo: undefined,
};

export const panelSlice = createSlice({
	name: "panel",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setClosed: (panel) => {
			panel.state = PanelStateOptions.closed;
		},
		setOnChat: (panel, payload: PayloadAction<Chat>) => {
			panel.state = PanelStateOptions.onChat;
			panel.chatInfo = payload.payload;
		},
	},
});

export const { setClosed, setOnChat } = panelSlice.actions;

export const panelReducer = panelSlice.reducer;
