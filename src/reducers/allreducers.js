import {combineReducers} from 'redux';
import LoginReducer from '../reducers/LoginReducer';

const allreducer = combineReducers(
    {
        loginDetails_store:LoginReducer,
        ///can have more reducers e.g movies: MovieReducers so on...
    }
)

export default allreducer;




