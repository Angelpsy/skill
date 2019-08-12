import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SkillsItem from '../SkillsItem';
import List from '@material-ui/core/List';

function Skills(props) {
    return (
        <List component="nav" className={cx("b-skills", props.className)}>
            {props.items.map(item => {
                return (
                    <SkillsItem key={item.uuid} item={item}/>
                );
            })}
        </List>
    );
}

Skills.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Skills;
