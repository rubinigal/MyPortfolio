import Project from "./Project";
import "../styles/ProjectsSection.css"

import raImage from "../assets/RA-site.png";
import conpilerImage from "../assets/Compiler.png";

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
            title: "Website: Rikmot Al",
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
            gitLink: "",
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