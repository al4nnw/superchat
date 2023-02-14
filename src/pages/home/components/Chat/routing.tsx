import { connect } from "react-redux";
import ChatView from ".";
import { useAppSelector } from "../../../../redux/hooks";
import { PanelStateOptions } from "../../../../redux/slices/panelSlice";
import ClosedPanel from "./components/ClosedChat";

/// Here we should use redux to access the current state and render the correct component
export default function ChatRoot() {
	const panel = useAppSelector((state) => {
		return state.panel;
	});
	return panel.state === PanelStateOptions.closed ? (
		<ClosedPanel />
	) : (
		<ChatView />
	);
}
