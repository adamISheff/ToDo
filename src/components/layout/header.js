import React from 'react';

const Header = () => {
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    );
}

const headerStyle = {
    fontFamily: 'Chelsea Market,cursive',
    color: 'rgb(106, 149, 157)',
    textAlign: 'center'
}
export default Header;