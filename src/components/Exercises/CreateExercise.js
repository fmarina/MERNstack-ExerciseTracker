import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

const CreateExercise = () => {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    const userInput = useRef(null);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username, 
            description,
            duration,
            date
        }
        console.log(exercise);
        history.goBack();
    }

    return (
      <div>
        <h2>Create New Exercise Log</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Username:</label>
              <select 
                required
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // ref={userInput}
                className="form-control"
              >
              { users.map(user => <option key={user} value={user}>{user}</option>) }
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              required
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes):</label>
            <input
              required
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <div>
              <DatePicker
               id="date"
               selected={date}
               onChange={(date) => setDate(date)}
              />
            </div>            
          </div>

          <div className="form-group">
            <input 
              type="submit" 
              value="Create New Exercise Log" 
              className="btn btn-primary" 
            />
          </div>
        </form>
      </div>
    );
}

export default CreateExercise;