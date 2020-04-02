import Link from 'next/link';

const Nav = props => {
    return (
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
    );
};

export default Nav;
