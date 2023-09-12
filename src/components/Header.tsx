import { useContext } from 'react';
import { MyContext } from '../contexts/PasswordContext';
import '../styles/Header.css';

export default function Header(): JSX.Element {

    const {saludo} = useContext(MyContext);

    return (
        <>
            <p>Password Generator</p>
            <p>{saludo}</p>
        </>
    )
}