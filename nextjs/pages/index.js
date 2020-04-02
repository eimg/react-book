import Header from './Header';
import Nav from './Nav';

const Home = props => {
    return (
        <div>
            <Header>
                <Nav />
            </Header>
            <h1>Welcome to Next.js</h1>
            <ul>
                <li>Alice</li>
                <li>Bob</li>
            </ul>
        </div>
    )
}

export default Home;
