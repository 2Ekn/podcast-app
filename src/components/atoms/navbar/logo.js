import tfkLogo from '../../../assets/tfkLogo.png';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className="flex items-center justify-center">
            <img src={tfkLogo} alt="TFK Logo" className="w-[80px] h-[80px]"/>
        </Link>
    );
}

export default Logo;