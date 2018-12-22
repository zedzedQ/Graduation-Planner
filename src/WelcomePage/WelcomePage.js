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

   }

    onDragstart = (start) => {
        document.body.style.color = 'orange';
        
        const homeIn= this.state.columnOrder.indexOf(start.source.droppableId);
       
        this.setState({
            homeIn,
        });
    };

    onDragUpdate = update => {

    };

    onDragEnd = result => {
        this.setState(
            {homeIndex: null,}
        )
        document.body.style.color = 'inherit';

        // reset the color
        const {destination, source, draggableId} = result;

        if (!destination) { 
            return;
        }

        // we might want to edit this so that user cannot re-order the availble course list
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
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
                columns: {
                    ...this.state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                }
            };

            this.setState(newState);
        }
    };
    

    render() {
        return (
            <div>
                <div>

                <NavLink  to="/main" >  Main page </NavLink>
                
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

                        const isDropDisabled = false;
                        return <Column key={column.id} column={column} courses={courses} isDropDisabled={isDropDisabled}/>;
                        })}
                    </Container>

                </DragDropContext>
            </div>
            
        );
    }

}

export default WelcomePage;