function Card({student, patchStudent, handleDelete}){
    console.log(student)
      return(
          <div>
            <h3>Name: {student.student_name}</h3>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Phone Number: {student.phone}</p>
            <p>School: {student.school.school_name}</p>
            {student.active? <button onClick={()=> patchStudent(student)}>Deactivate Student</button> : <p>Student is no longer active</p>}
            <button onClick={() => handleDelete(student.id)}>Delete Student</button>
          </div> 
        )
    }
    
    export default Card;