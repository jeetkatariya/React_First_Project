import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ListViewScreen from './components/ListViewScreen';
import reducers from './reducers';

class App extends Component {
    
    render() {
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        // return(
        //     <ListViewScreen /> 
        // );
        return(
            <Provider store={store}>
                <ListViewScreen/>
            </Provider>
        );
    }

}

export default App;