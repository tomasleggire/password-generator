import { useContext } from 'react';
import { MyContext } from '../contexts/PasswordContext';
import '../styles/Header.css';

export default function Header(): JSX.Element {

    const { saludo } = useContext(MyContext);

    return (
        <div className="main-header">
          <p>Password Generator</p>
          <p>{saludo}</p>
        </div>
    )
}