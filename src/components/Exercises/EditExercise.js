import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

const EditExercise = ({match}) => {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const {params} = match;
    const history = useHistory();

    useEffect(() => {
      axios.get(`http://localhost:5000/exercises/${params.id}`)
        .then(response => {
            setUsername(response.data.username);
            setDescription(response.data.description);
            setDuration(response.data.duration);
            setDate(new Date(response.data.date))
        })
        .catch((error) => console.log(error));

        axios.get('http://localhost:5000/users/')
          .then(response => {
              if(response.data.length > 0) {
                  setUsers(response.data.map(user => user.username));
              }
          })
          .catch(err => console.log("Error " + err));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username, 
            description,
            duration,
            date
        } 

        axios.post(`http://localhost:5000/exercises/update/${params.id}`, exercise)
          .then(res => console.log(res.data));

        history.push('/')
    }

    return (
      <div>
        <h2>Edit Exercise Log</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Username:</label>
              <select 
                required
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              value="Edit Exercise Log" 
              className="btn btn-primary" 
            />
          </div>
        </form>
      </div>
    );
}

export default EditExercise;