type NavbarProps = {
    items?: string[]
}

function Navbar({items=[]}: NavbarProps) {

    return(
        <div className="nav-bar">
            <ul>
                {items.map(item => 
                <li key={item}><a href={"#"+item}>{item}</a></li>)}
            </ul>
        </div>
    );
}

export default Navbar