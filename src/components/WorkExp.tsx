type ListJobs = {
    position: string,
    company: string,
    startTime: number,
    endTime?: number,
    description: string
}

function WorkExp(sectionId: {id: string}) {

    const listJobs: ListJobs[] = [
        {
            position: "Software Engineer",
            company: "Freelance",
            startTime: 2024,
            description: ""
        }
    ];

    const listJobsSorted = listJobs.sort((a, b) => b.startTime - a.startTime);

    return(
    <section id={sectionId.id} className="work-section">
        {listJobsSorted.map(job => <div className="job">
            <h3>{job.startTime} - {job.endTime ? job.endTime : "Present"}</h3>
            <div className="job-info">
                <p className="job-position">Position: {job.position}</p>
                <p className="job-company">Company: {job.company}</p>
            </div>
            <div className="job-desc">
                <p className="job-desc-header">What have I done:</p>
                <p className="job-desc-desc">{job.description}</p>
            </div>
        </div>)}
    </section>
    );
}

export default WorkExp