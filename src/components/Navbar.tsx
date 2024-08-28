import '../styles/Navbar.css'

type NavbarProps = {
    tabs?: string[]
}

function Navbar({tabs=[]}: NavbarProps) {

    const handleClick = () => {
        const toggleContent = document.getElementById("toggleContent");
        const toggleIcon = document.getElementById("toggleIcon");
        
        if(toggleContent)
            toggleContent.classList.toggle('hidden');

        if(toggleIcon && toggleIcon.classList.contains("fa-bars")) {
            toggleIcon.classList.remove("fa-bars");
            toggleIcon.classList.add("fa-x");
        } else if(toggleIcon) {
            toggleIcon.classList.remove("fa-x");
            toggleIcon.classList.add("fa-bars");
        }
    }

    const handleClickSideNav = () => {
        const screenWidth = window.innerWidth;

        if(screenWidth <= 640)
            handleClick();
    }

    return(
        <div className="nav-bar">
            <ul id="toggleContent">
                {tabs.map(item => 
                <li key={item}><a href={"#"+item} onClick={handleClickSideNav}>{item}</a></li>)}
            </ul>
            <button className="small-nav-btn" onClick={handleClick}><i id="toggleIcon" className="fa-solid fa-bars"></i></button>         
        </div>
    );
}

export default Navbar