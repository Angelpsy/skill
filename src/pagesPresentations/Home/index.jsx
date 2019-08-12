import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from '../../views/Base';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarErrorContentWrapper from '../../components/SnackbarErrorContentWrapper';
import Skills from '../../components/Skills';

class HomePresentation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenError: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isError !== this.props.isError) {
            this.setState({
                isOpenError: this.props.isError,
            });
        }
    }

    closeError = () => {
        this.setState({
            isOpenError: false,
        });
    };

    render() {
        return (
            <View className="p-home" title="Home">
                <Container>
                    { this.props.isLoading &&
                    <LinearProgress color="secondary" className="p-home__loader" />
                    }
                    {
                        this.props.isError &&
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.isOpenError}
                            onClose={this.closeError}
                            className="p-home__error"
                        >
                            <SnackbarErrorContentWrapper
                                onClose={this.closeError}
                                message={this.props.errorMessage}
                            />
                        </Snackbar>
                    }
                    {
                        this.props.isItems &&
                            <Skills
                                items={this.props.items}
                                className="p-home__skills"
                            />
                    }
                </Container>
            </View>
        );
    }
}

HomePresentation.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isItems: PropTypes.bool.isRequired,
    items: PropTypes.array,
    fetchData: PropTypes.func,
};

export default HomePresentation;
