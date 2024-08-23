import "../styles/SkillsSection.css"

function SkillsSection(sectionId: {id: string}) {

    const listSkills = [
        {icon: "fa-brands fa-node", iconName: "node"},
        {icon: "fa-brands fa-js", iconName: "JavaScript"},
        {icon: "fa-brands fa-react", iconName: "React"},     
        {icon: "fa-brands fa-html5", iconName: "HTML"},
        {icon: "fa-brands fa-css3-alt", iconName: "CSS"},
        {icon: "fa-brands fa-git-alt", iconName: "git"},
        {icon: "fa-brands fa-python", iconName: "python"},
        {icon: "fa-brands fa-java", iconName: "java"},
        {icon: "fa-solid fa-database", iconName: "PostgreSQL"},
        {icon: "fa-brands fa-envira", iconName: "MongoDB"},
        {icon: "fa-brands fa-linux", iconName: "linux"},
        {icon: "fa-brands fa-ubuntu", iconName: "ubuntu"},
        {icon: "fa-regular fa-c", iconName: "C"},
        {icon: "fa-brands fa-github", iconName: "GitHub"},
        {icon: "fa-brands fa-npm", iconName: "npm"},
        {icon: "fa-brands fa-sass", iconName: "sass"},
    ]

    return(
    <section id={sectionId.id} className="skill-section">
        <h2>My Skills:</h2>
        <div className="skills-box">
            {listSkills.map(skill => 
            <div id={skill.iconName} className="skill-card">
                <i className={skill.icon}></i>
                <p>{skill.iconName}</p>
            </div>)}
        </div>
    </section>
    );
}

export default SkillsSection