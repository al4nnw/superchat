import { OverridableComponent } from "@mui/material/OverridableComponent";
import styles from "./mainInput.module.scss";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import { useState } from "react";

export default function MainInput(props: {
	placeholder?: string;
	iconButtonAriaLabel?: string;
	/// Resets value if return is true
	onSubmit: (value: string) => boolean;
	id: string;
	initialValue?: string;
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) {
	const [input, setInput] = useState(props.initialValue ?? "");
	return (
		<div className={styles.barWrapper}>
			<input
				value={input}
				onInput={(e) => setInput((e.target as HTMLInputElement).value)}
				onKeyUp={(event) => {
					if (event.key === "Enter") {
						if (props.onSubmit(input)) {
							setInput("");
						}
					}
				}}
				className={styles.field}
				type="text"
				placeholder={props.placeholder}
			/>
			<div
				className={styles.iconWrapper}
				onClick={(event) => {
					if (props.onSubmit(input)) {
						setInput("");
					}
				}}
				aria-label={props.iconButtonAriaLabel}
			>
				{<props.icon />}
			</div>
		</div>
	);
}
