import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { LOGIN, PASSWORD } from "../../constants/constants";
import { login, password } from "../../redux/actions/actions";
import './LoginPage.scss';

const LoginPage = () => {
	const state = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const handlerLogin = (e) => {
		dispatch(login(LOGIN, e.target.value))
	}
	const handlerPassword = (e) => {
		dispatch(password(PASSWORD, e.target.value))
	}
	return (
		<form className="form">
			<input className="form__input"
				onChange={handlerLogin} />
			<input className="form__input"
				onChange={handlerPassword} />
			<Link
				to="/profile"
				className={`form__link ${state.login === 'devLogin' && state.password === '12345' ? '' : 'form__link--disabled'}`}
			>
				Войти
			</Link>
		</form>
	)
}

export default LoginPage;