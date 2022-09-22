import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice ({
    name: 'student',
    initialState: {
        students: [],
        value: ""
    },
    reducers: {
        addStudent: ( state, action ) => {
            state.students = [...state.students, action.payload]
        },
        updateStudent: ( state, action )  => {
            state.students = [...action.payload]
        },
        setValueStudents: ( state, action ) => {
            state.value = action.payload
        }
    }
})

export const { addStudent, updateStudent, setValueStudents } = studentSlice.actions

export default studentSlice.reducer