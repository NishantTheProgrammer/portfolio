import classes from './Education.module.css';

const education = props => {
    return (
        <div className={classes.education}>
            <h1>EDUCATION</h1>
            <h2>MASTER IN COMPUTER APPLICATIONS (MCA) - IGNOU (2023)</h2>
            <p className={classes.p}>
                Master's degree focusing on advanced software design, distributed architectures, database systems, and full-stack development methodologies.
            </p>
            <h2>BACHELOR IN COMPUTER APPLICATION (BCA) - IGNOU (2020)</h2>
            <p className={classes.p}>
                Undergraduate degree establishing foundational computer science knowledge in data structures, algorithms, object-oriented programming, and web engineering.
            </p>
        </div>
    );
};

export default education;
