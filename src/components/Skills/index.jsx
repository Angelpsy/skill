import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SkillsItem from '../SkillsItem';

function Skills(props) {
    return (
        <div className={cx("b-skills", props.className)}>
            {props.items.map(item => {
                return (
                    <SkillsItem key={item.uuid} item={item}/>
                );
            })}
        </div>
    );
}

Skills.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Skills;
