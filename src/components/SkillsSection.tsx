import "../styles/SkillsSection.css"

function SkillsSection(sectionId: {id: string}) {

    const listSkills = [
        {icon: "fa-brands fa-js", iconName: "JavaScript"}
    ]

    return(
    <section id={sectionId.id} className="skill-section">
        {listSkills.map(skill => 
        <div id={skill.iconName}>
            <i className={skill.icon}></i>
            <p>{skill.iconName}</p>
        </div>)}
    </section>
    );
}

export default SkillsSection