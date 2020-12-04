import classes from './Skill.module.css';

const skill = props => {

    console.log(props.type, props.framework)
    return (
        <div className={classes.skill}>
            <svg>
                <circle className={classes.circle} style={{
                        strokeDashoffset: `calc(440 - (440 * ${props.percent}) / 100)`,
                        stroke: props.color
                }} cx="70" cy="70" r="70"></circle>
            </svg>
            <span className={classes.percent}>{props.percent}%</span>
            <div className={classes.skillName}><i className={props.icon}></i>&nbsp; {props.type}</div>
            <div className={classes.framework}>
                {
                    props.frameworks ? props.frameworks.map(framework => {
                        console.log(framework)
                        return <i title={framework.title} className={framework.icon} key={framework.icon} style={{color: framework.color}}></i>
                    }) 
                :null}
            </div>
        </div>
    )
}

export default skill;