const styles = {
    header: {
        padding: 10,
        background: 'cyan'
    }
}

const Header = props => {
    return (
        <div style={styles.header}>
            {props.children}
        </div>
    )
}

export default Header;
