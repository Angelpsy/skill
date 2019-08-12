import { observable, computed } from 'mobx';
import Api from '../../api';

class Skills {
    /**
     * @type {Array|null}
     */
    @observable items = null;
    @observable isLoading = false;
    @observable errorStatus = null;
    @observable errorMessage = null;
    @computed get isItems() {
        return this.items !== null && !!this.items.length;
    }
    @computed get isError() {
        return this.errorStatus !== null;
    }

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    /**
     * @returns {Promise<void>}
     */
    async fetch() {
        this.errorStatus = null;
        this.errorMessage = null;
        this.isLoading = true;
        try {
            const { data } = await Api.Skills.getSkills();
            this.setItems(data);
        } catch (e) {
            this.errorStatus = 0;
            this.errorMessage = 'something happened. fail request.';
        } finally {
            this.isLoading = false;
        }

    };
    setItems(items) {
        this.items = items;
    };
}

export default Skills;
