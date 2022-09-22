import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./features/student/studentSlice"

export default configureStore({
    reducer: {
        students: studentsReducer
    }
})