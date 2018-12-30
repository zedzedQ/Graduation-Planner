import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Column from '../Common/Column'
import data from '../datatype/data.js'
import AvailableCourses from '../Common/AvailableCourses'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    
`;

// Main Page


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.addTerm = this.addTerm.bind(this);
        this.state = {
            // from welcomePage (we assume that we will get these data below)
            columns: {
                'cisLower': {
                    id: 'cisLower',
                    title: 'CIS Lower-Division ',
                    courseIds: ['math231', 'math232']
                },
        
                'cisUpper': {
                    id: 'cisUpper',
                    title: 'CIS Upper Division ',
                    courseIds: ['cis313', 'cis314', 'cis315', 'cis330', 'cis415', 'cis422', 'cis425']
                },
        
                'cisElective': {
                    id: 'cisElective',
                    title: 'CIS Elective',
                    courseIds: ['cis322', 'cis399', 'cis401', 'cis403', 'cis404', 'cis405', 'cis406', 'cis407', 'cis408', 'cis409', 'cis410', 'cis413', 'cis420', 'cis427', 'cis431', 'cis432', 'cis433', 'cis441', 'cis443', 'cis445', 'cis451', 'cis453', 'cis461', 'cis471', 'cis472']
                },
        
                'math': {
                    id: 'math',
                    title: 'Math',
                    courseIds: ['mathSequence2', 'mathUpper']
                },
        
                'science': {
                    id: 'science',
                    title: 'science',
                    courseIds: ['scienceSequence3']
                },
        
                'writing': {
                    id: 'writing',
                    title: 'writing 320/321',
                    courseIds: ['writing'],
                },
        
                'columnTaken': {
                    id: 'columnTaken',
                    title: 'taken courses',
                    courseIds: ['cis210', 'cis211', 'cis212', 'scienceSequence1', 'scienceSequence2','mathGeneral1', 'mathGeneral2', 'mathSequence1']
                },
        
                'non-cis': {
                    id: "non-cis",
                    title: 'non cis courses',
                    courseIds: ['non-cis']
                },
                
                '2019winter':{
                    id: '2019winter',
                    title: ' 2019winter',
                    courseIds: []
                }
            },
            currentYear: 2019,
            // 0: winter, 1: spring, 2: summer, 3: fall
            currentTermNum: 0,
            takenCourses: {}, //  a set whihc contains all taken courses regardless its category  
            
            cisCourses: data.cisCourses,
            columnOrder: data.columnOrder,

            terms: ['winter', 'spring', 'summer', 'fall'],  
            
        };
    }

    getNextTerm(){
        let term = this.state.currentTermNum;
        let year = this.state.currentYear;
        term += 1;
        if (term % 4 === 0){
            year += 1;
        }
        return {
            termNum: term,
            year: year
        };
    };

    addTerm(){
        // get the new term
        const {termNum, year} = this.getNextTerm();
        let newTerm = this.state.terms[termNum%4];
        let newTermName = year.toString() + newTerm;
        
        // build the new term dict        
        let term = {
                id: newTermName,
                title: newTermName,
                courseIds: []
        }

        // copy old data and add new term
        var newColumns = this.state.columns;
        newColumns[newTermName] = term;
        var newColumnOrder = this.state.columnOrder;
        newColumnOrder.push(newTermName);

        
        this.setState({
            columns:newColumns,
            columnOrder: newColumnOrder,
            currentYear: year,
            currentTermNum: termNum
        });
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

        // we can only drag to the same column or current column
        const course = this.state.cisCourses[draggableId];
        if (destination.droppableId !== course.category && destination.droppableId !== this.state.columnOrder[this.state.columnOrder.length - 1]){
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
                    <NavLink  to="/" >  welcome page </NavLink>
                </div>
            <DragDropContext 
            onDragEnd = {this.onDragEnd}
            onDragStart= {this.onDragStart}
            onDragUpdate= {this.onDragUpdate}                
            >
                <button onClick={this.addTerm}>add</button>
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