/* eslint-disable no-useless-concat */
import { useState } from "react";
import styles from "./ProfilePill.module.scss";
import debounce from "../../../../utils/debounce";

import PersonIcon from "@mui/icons-material/Person";
import { auth } from "../../../../App";

export default function ProfilePill() {
	const [isExtended, setIsExtended] = useState(false);
	return (
		<div
			className={styles.root + " " + `${isExtended ? styles.showName : ""}`}
			onMouseEnter={() => debounce(() => setIsExtended(true), 1000)}
			onMouseLeave={() => debounce(() => setIsExtended(false), 1000)}
			onClick={() => auth.signOut()}
		>
			<div className={styles.iconWrapper}>
				<PersonIcon />
			</div>
			<div className={styles.userWrapper}>Alan Cesar Sousa</div>
		</div>
	);

	/* function toggleIsExtended() {
		setIsExtended(!isExtended);
	} */
}
