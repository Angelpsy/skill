import Home from '../pages/Home';

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

const routes = [...routesMap.values()];

export default routes;
