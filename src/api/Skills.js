import wrapper from './wrapper';

const Skills = {
    /**
     * @param {Number=1} page
     * @param {Number=20} perPage
     * @returns {AxiosPromise}
     */
    getSkills: (page = 1, perPage = 20) => {
        return wrapper('/skills', {
            params: {
                offset: (page - 1) * perPage,
                limit: perPage
            }
        });
    }
};

export default Skills;
