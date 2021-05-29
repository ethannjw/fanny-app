import {  Route, Switch } from 'react-router-dom';
import App from '../views/App'
import AddNew from '../views/AddNew'
import Modify from '../views/Modify'

export default function Routes() {
    return (
        <main>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/add-new' component={AddNew} />
                <Route path='/modify' component={Modify} />
                {/* <Route component={Error} /> */}
            </Switch>
        </main>
    )
}