import {
	useCreateUserWithEmailAndPassword,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Spacer from "../../components/Spacer";
import TextField from "../../components/TextField";
import { TextFieldController } from "../../components/TextField";
import styles from "./authentication.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../App";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
const nomeController = new TextFieldController<string>("");
const emailController = new TextFieldController<string>("");
const pwdController = new TextFieldController<string>("");

export default function Authentication() {
	const [isLogin, setIsLogin] = useState(true);
	const [createUser, user] = useCreateUserWithEmailAndPassword(auth);
	const [signIn] = useSignInWithEmailAndPassword(auth);
	const navigate = useNavigate();
	let lembrarSenha = false;

	return (
		<div className={styles.root}>
			<section className={styles.loginCard}>
				<div className={styles.cardTitle}>
					Faça o seu {isLogin ? "Login" : "Cadastro"}.
				</div>

				<Spacer height={32} />
				<form>
					{!isLogin ? (
						<>
							<TextField
								controller={nomeController}
								id={"name"}
								type={"text"}
								label={"Nome"}
								hint={"Digite o seu nome"}
							/>
							<Spacer height={24} />
						</>
					) : (
						<></>
					)}

					<TextField
						controller={emailController}
						id={"email"}
						type={"email"}
						label={"Email"}
						hint={"Digite o seu email"}
					/>
					<Spacer height={24} />
					<TextField
						controller={pwdController}
						id={"password"}
						type={"password"}
						label={"Senha"}
						hint={"Digite a sua senha"}
					/>
				</form>
				<Spacer height={8} />

				{isLogin ? (
					<div>
						<input
							type="checkbox"
							onChange={(event) => (lembrarSenha = event.target.checked)}
						/>{" "}
						Lembrar senha
					</div>
				) : (
					""
				)}
				<Spacer height={16} />

				<div className={styles.cadastroInvite}>
					{isLogin ? "Não é cadastrado ainda?" : "Já é cadastrado?"}
					<span
						tabIndex={1}
						aria-label={
							isLogin
								? "Clique aqui para cadastrar-se."
								: "Clique para voltar ao Login."
						}
						onClick={() => setIsLogin(!isLogin)}
					>
						{"Clique aqui."}
					</span>
				</div>
				<Spacer height={16} />

				<div className={styles.buttonWrapper}>
					<button onClick={onButtonClick}>
						{isLogin ? "Login" : "Cadastrar"}
					</button>
				</div>
			</section>
		</div>
	);

	function validateForm(): boolean {
		const nome = nomeController.value;
		const email = emailController.value;
		const pwd = pwdController.value;

		if (email === "" || pwd === "" || (!isLogin && nome === "")) {
			alert("Preencha as informações");
			return false;
		}
		return true;
	}

	async function onButtonClick() {
		if (validateForm()) {
			const email = emailController.value;
			const password = pwdController.value;
			if (isLogin) {
				if (lembrarSenha) {
					console.log("User wants to remember password");
					await setPersistence(auth, browserLocalPersistence);
				}
				signIn(email, password)
					.then((value) => {
						console.log(value);
						localStorage.setItem("user", JSON.stringify(value));
						navigate("/");
					})
					.catch((error) => {
						alert(error.message);
					});
			} else {
				await createUser(email, password);
				alert("Cadastro efetuado com sucesso.");
			}
		}
	}
}
