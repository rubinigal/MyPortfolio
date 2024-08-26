import "../styles/Project.css"

type ProjectProps = {
    title: string,
    description: string,
    skills: string,
    image?: string,
    isRightSide?: boolean,
    gitLink: string,
    siteLink?: string,
}

function Project({title, description, skills, image="", isRightSide=true, gitLink, siteLink=""}: ProjectProps) {

    let links = <></>;
    if(!siteLink || siteLink === "") {
        links = <div><a href={gitLink}>Code</a></div>
    } else {
        links = <div><a href={gitLink}>To Code</a> <a href={siteLink}>To Live Site</a></div>
    }

    const desc = <div className="project-desc"><h3>{title}</h3><p>{description}</p><p><strong>Skills:</strong> {skills}</p>{links}</div>;
    const pic = <div className="project-pic"><img src={image} alt={title} /></div>;
    
    return(
    <div className="project">
       {isRightSide ? <>{desc} {pic}</> : <>{pic} {desc}</>}
    </div>
    );
}

export default Project