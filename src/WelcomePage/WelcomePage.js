import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import data from '../datatype/data.js'
import Column from '../Common/Column'
import AvailableCourses from '../Common/AvailableCourses'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    
`;

// Welcome Page
class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = data;


        // {
        //     columns: data.columns,
        //     cisCourses: data.cisCourses,
        //     welcomeOrder: data.welcomeOrder,
        //     numberOfColumns: data.welcomeOrder.length,
            
        // };
        this.submit = this.submit.bind(this);
   }

    onDragStart = (start) => {
        // maybe delete this (css currently is overriding it)
        document.body.style.color = 'orange';
        const homeIn= this.state.columnOrder.indexOf(start.source.droppableId);
        const course = this.state.cisCourses[start.draggableId];
        const highlightSection = course.category;
        const highlightTerm = this.state.welcomeOrder[this.state.welcomeOrder.length-1];

        this.setState({
            homeIn,
            highlightSection,
            highlightTerm
        });
    };


    onDragUpdate = update => {

    };


//function for submit button
    submit(){
       this.props.ParentSubmit(this.state)
    }

    onDragEnd = result => {
        this.setState(
            {
                homeIndex: null,
                highlightSection: null,
                highlightTerm: null,
            }
        )

        // reset the color
        const {destination, source, draggableId} = result;

        /**
         *  Determine the cases which we just do nothing and return
         */        
        // do nothing when no destination
        if (!destination) { 
            return;
        }
            
        // if the source is the destination, we do not set state
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // we can only drag to the same column or taken column
        const course = this.state.cisCourses[draggableId];
        if (destination.droppableId !== course.category && destination.droppableId !== this.state.welcomeOrder[this.state.welcomeOrder.length - 1]){
            return;
        }    


        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newCourseIds = Array.from(start.courseIds);
            newCourseIds.splice(source.index, 1); // from the index, we remove one element
            newCourseIds.splice(destination.index, 0, draggableId); // start from destination and insert the taskid


            const newCol = {
                ...start,
                courseIds: newCourseIds
            };

            const newState = {
                ...this.state,
                highlightSection: null,
                highlightTerm: null,
                columns: {
                    ...this.state.columns, // keep other column, only modify the newCol id
                    [newCol.id]: newCol
                }
            }

            this.setState(newState);
            return;
        } else {
            // moving from one list to another
            const startCourseIds = Array.from(start.courseIds);
            startCourseIds.splice(source.index, 1);

            const newStart = {
                ...start,
                courseIds: startCourseIds,
            };

            const finishCourseIds = Array.from(finish.courseIds);
            finishCourseIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                courseIds: finishCourseIds
            };

            const newState = {
                ...this.state,
                highlightSection: null,
                highlightTerm: null,
                columns: {
                    ...this.state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish, 
                }
            };

            this.setState(newState);
        }
    };
    

    render() {

        
        return (
            <div>
                <div>
                    <button onClick={this.submit} > submit </button>
                
                
                </div>

                <DragDropContext 
                    onDragEnd = {this.onDragEnd}
                    onDragStart= {this.onDragStart}
                    onDragUpdate= {this.onDragUpdate}                
                >
                    <Container>
                        <AvailableCourses sections={this.state.welcomeOrder.slice(0,7)} state={this.state}> </AvailableCourses>

                        {this.state.welcomeOrder.slice(7).map((columnId, index)=> {
                        const column = this.state.columns[columnId];
                        const courses = column.courseIds.map(courseId => this.state.cisCourses[courseId]);
                        
                        // maybe delete this field??
                        const isDropDisabled = false;
                        const isHighlighted = this.state.highlightTerm === columnId;
                        return <Column key={column.id} column={column} courses={courses} isDropDisabled={isDropDisabled} isHighlighted={isHighlighted}/>;
                        })}
                    </Container>

                </DragDropContext>
            </div>
            
        );
    }

}

export default WelcomePage;