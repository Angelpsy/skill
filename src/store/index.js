import { observable } from 'mobx';
import Skills from './skills'

class RootStore {
    @observable state = 'inactive';

    constructor() {
        this.skillsModule = new Skills(this);
    }

    init() {
        this.state = 'active';
    };
}

export default RootStore;
