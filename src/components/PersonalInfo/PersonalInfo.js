import classes from './PersonalInfo.module.css';

const personalInfo = props => {
    let info = {
        name: "Nishant",
        role: "Senior Software Engineer",
        qualification: "MCA (Master of Computer Applications)",
        experience: "6 Years",
        specialization: "Full Stack & Microservices",
        phone: "+91 7838716089",
        email: "knishant113@gmail.com",
        location: "Delhi, India",
        nationality: "Indian",
        languages: "English, Hindi, Urdu"
    };

    return (
        <div className={classes.personalInfo}>
            <table className={classes.info}>
                <tbody>{
                Object.keys(info).map(ele => {
                    return (
                        <tr key={ele}>
                            <th>
                                <p style={{
                                    textTransform: "capitalize",
                                    fontWeight: "normal"
                                    }}>{ele}</p>
                            </th>
                            <td>
                                <p>{info[ele]}</p>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <img src={props.img} alt="Nishant" className={classes.personalInfo}></img>
        </div>
    );
};

export default personalInfo;
