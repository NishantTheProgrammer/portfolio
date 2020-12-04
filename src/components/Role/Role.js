const { Component } = require("react");


class Role extends Component {
    state = {
        role: 'Freelancer',
        write: false,
        selected: 0
    }
    componentDidMount() {
        const roles = [
            "Freelancer",
            "Programmer",
            "Web Developer",
            "Game Developer"
        ];
        setInterval(() => {
            if(!this.state.write) {
                if(this.state.role.length !== 0) {
                    this.setState(prev => ({role: prev.role.slice(0, prev.role.length - 1)}));
                }
                else {
                    this.setState(prev => {
                        return {selected: (prev.selected + 1) % roles.length, write: true}
                    });
                }
            }
            else {
                if(this.state.role !== roles[this.state.selected]) {
                    this.setState(prev => ({role: roles[this.state.selected].slice(0, prev.role.length + 1)}));
                }
                else {
                    this.setState(() => ({write: false}));
                }
            }
        }, 100);
    }
    render() { return <span style={{color: '#ffb400'}} id="role">{this.state.role}</span>; }
}

export default Role;