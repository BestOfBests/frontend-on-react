const Navbar = () => {
    
    return (
        <nav className="Navbar">
            <h1>Planet finders </h1>
         
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'black',
                    height: '30px',
                    backgroundColor: 'red',
                    borderRadius: '10px'
                    }}>New Blog</a>
            </div>
        </nav>
        // f1356d
    );
}

export default Navbar;