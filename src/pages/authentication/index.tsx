import {
	useCreateUserWithEmailAndPassword,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Spacer from "../../components/Spacer";
import TextField from "../../components/TextField";
import { TextFieldController } from "../../components/TextField";
import styles from "./authentication.module.scss";

import { useState } from "react";
import { auth } from "../../App";

const nomeController = new TextFieldController<string>("");
const emailController = new TextFieldController<string>("");
const pwdController = new TextFieldController<string>("");
export default function Authentication() {
	const [isLogin, setIsLogin] = useState(true);
	const [createUser] = useCreateUserWithEmailAndPassword(auth);
	const [signIn] = useSignInWithEmailAndPassword(auth);

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
				<Spacer height={24} />

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
					<button
						onClick={async () => {
							if (validateForm()) {
								const email = emailController.value;
								const password = pwdController.value;
								if (isLogin) {
									await signIn(email, password);
									alert("Login efetuado com sucesso.");
								} else {
									await createUser(email, password);
									alert("Cadastro realizado com sucesso.");
								}
							}
						}}
					>
						{isLogin ? "Login" : "Cadastrar"}
					</button>
				</div>
			</section>
		</div>
	);
}
