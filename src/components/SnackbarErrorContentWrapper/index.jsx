import React from 'react';
import cx from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import styles from './styles';
import './index.css';


function SnackbarErrorContentWrapper({ message, onClose, ...other }) {
    const classes = styles();

    return (
        <SnackbarContent
            className={cx("b-snackbar-error-content-wrapper", classes.error)}
            aria-describedby="client-snackbar"
            message={
                <span className="b-snackbar-error-content-wrapper__message">
                    <ErrorIcon
                        className="b-snackbar-error-content-wrapper__icon"
                    />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

export default SnackbarErrorContentWrapper;
