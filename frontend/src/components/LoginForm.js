import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import { login } from "../utils/APIUtils";
import Alert from 'react-s-alert';

const handleSubmit = (event, email, password, props) => {
    event.preventDefault();
    const loginRequest = Object.assign({email, password});

    login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
           props.history.push("/");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
}

export default function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => handleSubmit(e, email, password, props)}>
            <div className="form-item">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    value={email} onChange={setEmail} required />
            </div>
            <div className="form-item">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    value={password} onChange={setPassword} required />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
        </form>
    );

}