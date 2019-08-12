import React, {Component, Fragment} from 'react';
import Presentation from '../../pagesPresentations/Home';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class HomeContainer extends Component {
    componentDidMount() {
        this.fetchSkills();
    }

    fetchSkills = () => {
       this.props.store.skillsModule.fetch();
    };

    render() {
        const skills = this.props.store.skillsModule;
        const isLoading = skills.isLoading;
        const isError = skills.isError;
        const errorMessage = skills.errorMessage;
        const items = skills.items;
        const isItems = skills.isItems;

        return (
            <Presentation
                isLoading={isLoading}
                isError={isError}
                errorMessage={errorMessage}
                isItems={isItems}
                items={items}
                fetchData={this.fetchSkills}
            />
        );
    }
}

export default HomeContainer;
