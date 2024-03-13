import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slice/Todo';

export default configureStore({
    reducer: {
        todo: todoReducer,
    },
});
