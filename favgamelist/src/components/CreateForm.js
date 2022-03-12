import {useState} from 'react'

function CreateForm({postStudent, schools}){
    const [formData, setFormData] = useState({
        name:'',
        age: '',
        gender: '',
        phone: '',
        school_id:'',
        active: true
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postStudent(formData)
    } 
    return(
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            </label>
            <label>
            Gender:
            <input type="text" name="gender" value={formData.gender} onChange={handleChange}/>
            </label>
            <label>
            Phone number:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
            </label>
            <label>
            School:
           <select name="school_id" onChange={handleChange}>
               <option>Select A School</option>
               {schools.map(s => <option value={s.id}>{s.school_name}</option>)}
           </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateForm