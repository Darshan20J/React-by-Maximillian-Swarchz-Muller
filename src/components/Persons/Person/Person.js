import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass';
import classes from './Person.module.css';

// import Aux from '../../../hoc/Auxiliary';
// import personStyle from './Person.module.css';

export class Person extends Component {
    constructor(props) {
        super(props)

        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                {(this.props.isAuth) ? <p>Authenticated</p> : <p>Login</p>}
                <p onClick={this.props.click}>Hello I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.name} />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, classes.Person)