import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="Home-Wrap">
            <div className="Home-Heading">
                <p>  Welcome to&nbsp;<span>BRAND</span></p>
            </div>
            <div >
            <p>  Want to check out our awesome <strong>products</strong> OR Get to know our huge list of <strong>users?</strong></p>  
            </div>
            <div className="Home-Nav-buttons">
                <Link to="/Products" className="Home-Nav-Button" >
                    Products
                </Link>
        
                <Link  to="/Users" className="Home-Nav-Button" >
                    Users
                </Link>
            </div>
        </div>
    )
}

export default Home;