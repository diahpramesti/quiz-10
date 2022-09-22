import { useSelector, useDispatch } from "react-redux";
import { addStudent, updateStudent, setValueStudents } from "../features/student/studentSlice";

const AddStudent = () => {
    const valueStudent = useSelector(state => state.students.value)
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addStudent({ student: valueStudent, id: Date.now() + Math.random(15)}))}>Add New Student</button>
    )
}

const InputStudent = () => {
    const valueStudent = useSelector( state => state.students.value)
    const dispatch = useDispatch();
    console.log('valueStudent DONE', valueStudent)
    
    return (
        <input type="text" value={valueStudent} onChange={(e) => dispatch(setValueStudents(e.target.value))} />
    )
}

const DeleteStudent = ({id}) => {
    const students = useSelector( state => state.students.students)
    const dispatch = useDispatch();
    const handleDelete = () => {
        let temp = students.filter((students) => students.id !== id)
        dispatch(updateStudent(temp))
    }
    return (
        <button onClick={() => handleDelete(id)}>delete</button>
    )
}

const Students = () => {
    const students = useSelector(state => state.students.students)

    return (
        <div>
            <h1>Student List</h1>
            <div>
                <InputStudent/>
                <AddStudent/>
                <ul>
                    {students.map((student) => (
                        <li key={student?.id}>{student.student} <br /> <DeleteStudent id={student?.id}/></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Students