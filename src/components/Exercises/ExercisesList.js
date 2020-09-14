import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = ({exercise, deleteExercise}) => (
    
    <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${exercise._id}`}>Edit </Link> 
            | 
            <a href="#" onClick={() => deleteExercise(exercise._id)}> Delete</a>
        </td>
    </tr>
)

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
          .then(response => setExercises(response.data))
          .catch(err => console.log("Error ", err));
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
          .then(res => console.log(res.data));
        
        setExercises((prevExerc) => prevExerc.filter(exerc => exerc._id !== id));
    }

    const showExercises = () => (
        exercises.map(currentExerc => (
            <Exercise
                key={currentExerc._id}
                exercise={currentExerc} 
                deleteExercise={deleteExercise}
            />
        ))
    );

    return (
        <div>
            <h2>Exercises List</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{showExercises()}</tbody>       
            </table>
        </div>
    );
}

export default ExercisesList;