import React from 'react'
import { render } from 'react-dom'
import Card from './Card'


function ExerciseList(props) {

    return (
        <div>
            {   props.execirses.map((exercise)=>{

                return(
                    <Card
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                    />
                )
                })
              
            }

        </div>

    )
}

export default ExerciseList;