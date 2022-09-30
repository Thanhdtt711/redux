import { createSlice } from "@reduxjs/toolkit";

const init = {
    jobs: [],
    search: []
}

const toDoSlice = createSlice({
    name: 'todo2',
    initialState: init,
    reducers: {
        add: (state, action) => { //=> todo/add
            state.jobs.push(action.payload)
            
            console.log(state.todo)
        },

        remove: (state, action) => {
            state.jobs.splice(action.payload, 1);
        },

        search: (state, action) => {
            state.search.push(action.payload)
        }
    }
})

export const todoSelector = state => state.todo.jobs; //Tạo selector
export const todoSearch = state => state.todo.search; //Tạo selector

export const {add: addToDo, remove: removeToDo, search: searchToDo} = toDoSlice.actions;

export default toDoSlice.reducer; //Bắt buộc phải export reducer để store sử dụng