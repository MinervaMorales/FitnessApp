import React from 'react'
import './styles/AddButton.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'


const AddButtton = ()=>(

    <Link to="/exercise/new">
        <img src={buttonImg} className="Fitness-Add" />
    </Link>
)

export default AddButtton