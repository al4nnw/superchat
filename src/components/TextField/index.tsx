import { useState } from "react";
import styles from "./textfield.module.scss";

export class TextFieldController<T> {
	value: T;

	constructor(initialValue: T) {
		this.value = initialValue;
	}

	setValue(newValue: T) {
		this.value = newValue;
	}
}

export default function TextField(props: {
	id: string;
	label: string;
	hint: string;
	type?: string;
	controller: TextFieldController<string>;
}) {
	return (
		<div>
			<label
				htmlFor={props.id}
				className={styles.labelContent + " " + styles.verticalizeLabel}
			>
				{props.label}
			</label>
			<input
				autoComplete="on"
				onChange={(event) => props.controller.setValue(event.target.value)}
				className={styles.textField}
				id={props.id}
				placeholder={props.hint}
				type={props.type}
			></input>
		</div>
	);
}
