type ProjectProps = {
    title: string,
    description: string,
    skills: string,
    image?: string,
    isRightSide?: boolean
}

function Project({title, description, image="", isRightSide=true}: ProjectProps) {

    const desc = <div className="project-desc"><h3>{title}</h3><p>{description}</p></div>;
    const pic = <div className="project-pic"><img src={image} alt={title} /></div>;
    
    return(
    <div className="project">
       {isRightSide ? <>{desc} {pic}</> : <>{pic} {desc}</>}
    </div>
    );
}

export default Project