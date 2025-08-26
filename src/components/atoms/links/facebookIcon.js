import { Link } from 'react-router-dom';

function FacebookIcon(){
    return(
       <Link href="https://www.facebook.com/smashpodden" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook text-white hover:text-blue-700 cursor-pointer"></i>
       </Link>
    )
}
export default FacebookIcon;