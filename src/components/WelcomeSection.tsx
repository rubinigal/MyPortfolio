import "../styles/WelcomeSection.css"

function WelcomeSection(sectionId: {id: string}) {

    return(
    <section id={sectionId.id} className="welcome-section">
        <h1>Hi, I am Igal Rubin</h1>
        <p>a software engineer</p>
    </section>
    );
}

export default WelcomeSection