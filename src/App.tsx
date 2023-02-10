import React from "react";
import "./App.css";
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/database";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Authentication from "./pages/authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";

const firebaseConfig = {
	/* apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	databaseURL: process.env.DATABASEURL,
	projectId: process.env.PROJECTID,
	storageBucket: process.env.STORAGEBUCKET,
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID, */
	apiKey: "AIzaSyAoUXJj9I-TGNUuInl23h_N0XQuBafz_z0",
	authDomain: "superchat-fbb77.firebaseapp.com",
	projectId: "superchat-fbb77",
	storageBucket: "superchat-fbb77.appspot.com",
	messagingSenderId: "166753575264",
	appId: "1:166753575264:web:ce8c4bb24d4effa32cfe05",
	measurementId: "G-LEX2D1XQ6",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const App: React.FC = () => {
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return <Loading />;
	}
	if (error) {
		alert(error?.message);
	}
	return (
		<Router>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Authentication />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
