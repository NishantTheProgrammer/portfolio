import classes from './PersonalInfo.module.css'

const personalInfo = props => {
    let info = {
        name: "Nishant",
        qualification: "BCA",
        nationality: "Indian",
        experiance: "1 year",
        phone: "+91 7838716089",
        email: "knishant113@gmail.com",
        age: "22 Years",
        languages: "English, Hindi, Urdu"
    }

    return (
        <div class={classes.personalInfo}>
            <table class={classes.info}>
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