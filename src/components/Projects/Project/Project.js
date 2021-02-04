import classes from './Project.module.css';

const project = props => {
    let media = null;
    switch(props.media.type) {
        case 'youtube':
            media = <iframe 
                title={props.title}
                className={classes.preview}
                src={props.media.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />;
            break;
        case 'video':
            media = <video src={props.media.link} className={classes.preview} controls></video>
    }
    return (
        <div className={classes.item}>
            {media}
            <div>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.description}>{props.description}</p>
                <div className={classes.btn} ><a href={props.sourceCode} ><i className="fas fa-code-branch"></i> Source Code</a></div>
                {props.hosted ? <div className={[classes.btn, classes.demo].join(' ')} ><a href={props.hosted} ><i className="fab fa-chrome"></i> Live Demo</a></div>: null}
            </div>
        </div>
);
};

export default project;