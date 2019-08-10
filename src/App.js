import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';

function App() {
    return (
        <div className="App">
            <Router>
                {routes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                        key={route.id}
                    />
                    )}

            </Router>
        </div>
    );
}

export default App;
