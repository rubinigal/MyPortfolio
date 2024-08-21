import '../styles/Navbar.css'

type NavbarProps = {
    tabs?: string[]
}

function Navbar({tabs=[]}: NavbarProps) {

    return(
        <div className="nav-bar">
            <ul>
                {tabs.map(item => 
                <li key={item}><a href={"#"+item}>{item}</a></li>)}
            </ul>
        </div>
    );
}

export default Navbar