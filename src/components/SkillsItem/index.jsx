import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

function SkillsItem(props) {
    return (
        <div className={cx("b-skills-item", props.className)}>
            <NavLink
                className={"b-skills-item__link"}
                to={`/skill/${props.item.uuid}`}
            >
                {props.item.name}
            </NavLink>
        </div>
    );
}

SkillsItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SkillsItem;
