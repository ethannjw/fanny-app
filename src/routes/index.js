import {  Route, Switch } from 'react-router-dom';
import App from '../views/App'
import AddNew from '../views/AddNew'
import Modify from '../views/Modify'
import Login from '../views/Login'

export default function Routes() {
    return (
        <main>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/add-new' component={AddNew} />
                <Route path='/modify' component={Modify} />
                <Route path='/login' component={Login} />
                {/* <Route component={Error} /> */}
            </Switch>
        </main>
    )
}