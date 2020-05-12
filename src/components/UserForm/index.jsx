import React from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {
    const [Firstname, bindFirstname, resetFirstname] = useInput('');
    const [Lastname, bindLastname, resetLastname] = useInput('');
    function hanleSubmit(e) {
        e.preventDefault();
        alert(`Hello ${Firstname} ${Lastname}`);
    }
    return (
        <form onSubmit={hanleSubmit}>
            <div>
                <label>First name</label>
                <input {...bindFirstname} type="text" />
            </div>
            <div>
                <label>Last name</label>
                <input {...bindLastname} type="text" />
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}

export default UserForm
