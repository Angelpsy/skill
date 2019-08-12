import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


class Skill extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                {id}
            </div>
        );
    }
}

Skill.propTypes = {
    id: PropTypes.string.isRequired,
    match: PropTypes.string.isRequired,
};


export default withRouter(Skill);
