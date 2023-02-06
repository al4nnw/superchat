import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../App";

export default function RequireAuthRoute({
	children,
}: {
	children: JSX.Element;
}) {
	let [user] = useAuthState(auth);

	if (user === undefined || user === null) {
		return <Navigate to="/login" />;
	}

	return children;
}
