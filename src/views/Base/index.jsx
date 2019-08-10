import React from 'react';
import cx from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './index.css';

function ViewBase(props) {

    return (
        <div className={cx("v-base", props.className)}>
            <AppBar position="static" className="v-base__header">
                <Toolbar>
                    <Typography variant="h6" className="v-base__title">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className="v-base__main">
                {props.children}
            </main>
        </div>
    );
}

export default ViewBase;
