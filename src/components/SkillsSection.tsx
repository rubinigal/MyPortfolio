import "../styles/SkillsSection.css"

type SectionId = {
    id: string
}

function SkillsSection(sectionId: SectionId) {

    const listSkills = [
        {icon: "fa-brands fa-js", iconName: "JavaScript"}
    ]

    return(
    <div id={sectionId.id} className="skill-section">
        {listSkills.map(skill => 
        <div>
            <i className={skill.icon}></i>
            <p>{skill.iconName}</p>
        </div>)}
    </div>
    );
}

export default SkillsSection