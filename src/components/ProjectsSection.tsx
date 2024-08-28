import Project from "./Project";
import "../styles/ProjectsSection.css"

import raImage from "../assets/RA-site.png";
import conpilerImage from "../assets/Compiler.png";
import reversi from "../assets/reversi.png"
import diningProblem from "../assets/Philosopher.png"

type ListProjects = {
    title: string,
    description: string,
    skills: string,
    image: string,
    gitLink: string,
    siteLink?: string,
}

function ProjectsSection(sectionId: {id: string}) {

    let isRightSide = false;
    const listProjects: ListProjects[] = [
        { 
            title: "Website: Rikmot Al - Coming Soon",
            description: "A website for a company named Rikmot Al",
            skills: "HTML, CSS, JavaScript, TypeScript, React.js, Vite and npm",
            image: raImage,
            gitLink: "",
        },
        {
            title: "Custom Language Compiler",
            description: "As part of my coursework at my university, I had the invaluable opportunity to embark on a challenging and enriching project to develop a compiler for a custom programming language called. The goal of this project was to create a fully functional compiler capable of translating human-readable source code written in the custom language into executable machine code.",
            skills: "C, VMWARE, Ubuntu run by Linux/Unix",
            image: conpilerImage,
            gitLink: "https://github.com/rubinigal/Custom-Language-Compiler",
        },
        {
            title: "Reversi game - played by AI",
            description: "This Reversi game showcases the strategic depth of various AI algorithms as they compete against each other. Each algorithm brings a unique approach to the game, from methodical strategies to random moves, and even advanced decision-making techniques using heuristic functions. The game not only provides a platform to observe how these algorithms perform under different scenarios but also serves as a practical demonstration of AI in action, highlighting the strengths and weaknesses of different computational strategies in a classic board game setting.",
            skills: "Python, OOP, AI, search algorithms",
            image: reversi,
            gitLink: "https://github.com/rubinigal/Reversi-Game",
        },
        {
            title: "Dining Philosophers Problem - asynchronous problem",
            description: "The Dining Philosophers Problem is a classic concurrency issue in computer science. It involves philosophers who need two shared chopsticks to eat, leading to potential conflicts such as deadlock if all try to eat simultaneously. This problem highlights the challenges of managing shared resources without causing deadlock or starvation. Using Java and JavaFX, you can visually represent this problem to better understand and demonstrate these concurrency challenges.",
            skills: "Java, JavaFX",
            image: diningProblem,
            gitLink: "https://github.com/rubinigal/Dining-Philosophers-Problem",
        }
    ];

    return(
    <section id={sectionId.id} className="projects-section">
        <div className="projects-box">
            <h3 className="projects-header">Featured Projects...</h3>
            {listProjects.map(project => {
                isRightSide = !isRightSide
                return <Project title={project.title} description={project.description} skills={project.skills} image={project.image} gitLink={project.gitLink} isRightSide={isRightSide} />
                })}
            <h2 className="projects-footer">and many more projects on my <a href="https://github.com/rubinigal" target="_blank" className="btn"><i className="fab fa-github"></i> GitHub</a></h2>
        </div>
    </section>
    );
}

export default ProjectsSection