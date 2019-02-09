import React, { Component } from 'react';
import Column from '../Common/Column'
import AvailableCourses from '../Common/AvailableCourses'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    
`;

// Main Page
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.datapassed;
        this.addTerm = this.addTerm.bind(this);
    }

    onDragStart = (start) => {
        const homeIn= this.state.columnOrder.indexOf(start.source.droppableId);
        const course = this.state.cisCourses[start.draggableId];
        const highlightSection = course.category;
        const highlightTerm = this.state.columnOrder[this.state.columnOrder.length-1];

        this.setState({
            homeIn,
            highlightSection,
            highlightTerm
        });
    };

    // function for add button
    addTerm(){
        const newTermName = "Term" + (this.state.columnOrder.length-6).toString();
        const newTerm = {
            id: newTermName,
            title: newTermName,
            courseIds: []
        }

        var newColumnOrder = this.state.columnOrder.slice()
        newColumnOrder.push(newTermName);

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns, 
                [newTermName]: newTerm,
            },
            columnOrder: newColumnOrder
        };

        this.setState(newState);
        
    }

    onDragUpdate = update => {

    };

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

        // we can only drag to the course's category column or the current term column
        // TODO: maybe added a alert window here to tell the user that they can only drag to the current window
        const course = this.state.cisCourses[draggableId];
        if (destination.droppableId !== course.category && destination.droppableId !== this.state.columnOrder[this.state.columnOrder.length-1]){
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
    }

    render() {
        console.log("State trigged at the main page")
        console.log(this.state);
        return (
            <div>
                <p> main page </p>
                <div>
                    <button onClick={this.addTerm} > add </button>
                </div>
                <DragDropContext 
                    onDragEnd = {this.onDragEnd}
                    onDragStart= {this.onDragStart}
                    onDragUpdate= {this.onDragUpdate}                
                >
                    
                    <Container>
                        <AvailableCourses sections={this.state.columnOrder.slice(0,7)} state={this.state}> </AvailableCourses>

                        {this.state.columnOrder.slice(7).map((columnId, index)=> {
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

export default MainPage;