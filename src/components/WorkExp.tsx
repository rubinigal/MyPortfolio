import "../styles/WorkExp.css"

type ListJobs = {
    position: string,
    company: string,
    startTime: number,
    endTime?: number,
    description: string[]
}

function WorkExp(sectionId: {id: string}) {

    const listJobs: ListJobs[] = [
        {
            position: "Software Engineer",
            company: "Freelance",
            startTime: 2024,
            description: [
                "Designing and developing tailored websites and applications for small businesses.",
                "Creating scalable, responsive, and user-friendly solutions.",
                "Enhancing online presence, driving customer engagement by up to 50%.",
                "Increasing businesses revenue by as much as 30%.",
                "Leveraging the latest technologies and best practices to deliver high-quality products.",
                "Attracting more customers and improves user experience."
            ]
        }
    ];

    const listJobsSorted = listJobs.sort((a, b) => b.startTime - a.startTime);

    return(
    <section id={sectionId.id} className="work-section">
        <div className="jobs-box">
            {listJobsSorted.map(job => <div className="job">
                <h3>{job.startTime} - {job.endTime ? job.endTime : "Present"}</h3>
                <div className="job-info">
                    <p className="job-position"><strong>Position:</strong> {job.position}</p>
                    <p className="job-company"><strong>Company:</strong> {job.company}</p>
                </div>
                <div className="job-desc">
                    <p className="job-desc-header">What have I done:</p>
                    <ul className="job-desc-desc">
                        {job.description.map((desc, index)=> <li key={index}>{desc}</li>)}
                    </ul>
                </div>
            </div>)}
        </div>
    </section>
    );
}

export default WorkExp