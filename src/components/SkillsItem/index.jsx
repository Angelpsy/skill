import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './index.css';

function SkillsItem(props) {
    return (
        <ListItem button className={cx("b-skills-item", props.className)}>
            <NavLink
                className={"b-skills-item__link"}
                to={`/skill/${props.item.uuid}`}
            >
                <ListItemText primary={props.item.name}></ListItemText>
            </NavLink>
        </ListItem>
    );
}

SkillsItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SkillsItem;
