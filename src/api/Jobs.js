import wrapper from './wrapper';

const Jobs = {
    getJobs: () => {
        return wrapper('/jobs');
    }
};

export default Jobs;
