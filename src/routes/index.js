import Home from '../pages/Home';
import Skill from '../pages/Skill';

const routesMap = new Map();
routesMap.set(
    'home',
    {
        id: 'home',
        name: 'home',
        path: '/',
        component: Home,
        exact: true,
    }
);
routesMap.set(
    'skill',
    {
        id: 'skill',
        name: 'skill',
        path: '/skill/:id',
        component: Skill,
        exact: false,
    }
);

const routes = [...routesMap.values()];

export default routes;
