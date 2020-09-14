import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
    const [username, setUsername] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username }

        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));

        history.goBack();
        setUsername("");
    }

    return (
        <div>
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                required 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
          </form>
        </div>
    );
}

export default CreateUser;