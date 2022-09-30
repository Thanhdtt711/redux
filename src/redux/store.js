//import rootReducer from './reducers/rootReducer';
// import {createStore} from 'redux';

// const store = createStore(rootReducer); //Tạo store

import {configureStore} from '@reduxjs/toolkit';
import toDoSlice from '../components/ToDo/toDoSlice';

const rootReducer = {
    reducer: {
        todo: toDoSlice
    }
}

const store = configureStore(rootReducer);

export default store;