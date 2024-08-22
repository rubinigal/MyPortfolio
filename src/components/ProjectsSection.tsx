import Project from "./Project";

function ProjectsSection(sectionId: {id: string}) {

    let isRightSide = false;
    const projects = [
        { 
            title: "Website: Rikmot Al",
            description: "A website for a company named Rikmot Al",
            skills: "HTML, CSS, JavaScript, TypeScript, React.js, Vite and npm",
            image: ""
        },
        {
            title: "Custom Language Compiler",
            description: "As part of my coursework at my university, I had the invaluable opportunity to embark on a challenging and enriching project to develop a compiler for a custom programming language called. The goal of this project was to create a fully functional compiler capable of translating human-readable source code written in the custom language into executable machine code.",
            skills: "C, VMWARE, Ubuntu run by Linux/Unix",
            image: ""
        }
    ]

    return(
    <section id={sectionId.id} className="projects-section">
        {projects.map(project => {
            isRightSide = !isRightSide
            return <Project title={project.title} description={project.description} skills={project.skills} image={project.image} isRightSide={isRightSide} />
            })}
    </section>
    );
}

export default ProjectsSection