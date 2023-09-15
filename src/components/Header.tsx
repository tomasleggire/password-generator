import { useContext } from 'react';
import { MyContext } from '../contexts/PasswordContext';
import { FaRegCopy } from 'react-icons/fa';

import '../styles/Header.css';

export default function Header(): JSX.Element {

    const { initialStatePassword, newPassword } = useContext(MyContext);

    return (
        <div className="main-header">
          <h2>Password Generator</h2>
          <div className="header-main-section">
            {
            !newPassword ? 
            (<p className="header-password-invalid">{initialStatePassword}</p>) : 
            (<p className="header-password-valid">{newPassword}</p>)
            }
            <button><FaRegCopy className="header-main-button-icon"/></button>
          </div>
        </div>
    )
}