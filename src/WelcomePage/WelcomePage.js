import React, { Component } from 'react';
import data from '../datatype/data.js'
import Column from '../Common/Column'
import AvailableCourses from '../Common/AvailableCourses'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import InfoSection from '../Common/InfoSeciton'


const Container = styled.div`
    display: flex;
    
`;

// Welcome Page
class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = data;
        this.submit = this.submit.bind(this);
        this.checkBeforeSubmit = this.checkBeforeSubmit.bind(this);
   }

    onDragStart = (start) => {
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


    // check for any illegal selection of courses
    checkBeforeSubmit(){
        var belongedCol;
        var curCourse;
        //a list of courses which already taken. Including all the missing courses.
        var takenCourse = this.state.columns.columnTaken.courseIds.slice();
        //queue for run BFS 
        var BFSqueue = []; 
        var filtered = cloneDeep(this.state.columns);
        // boolean value indicate whether go to next page
        var nextPage;
        // message to show on the pop-up window
        var message = "Click Ok to go to the next page"
        var numChosen = takenCourse.length;
        
        for (let i in takenCourse){
            BFSqueue.push(takenCourse[i])
        }

        while (BFSqueue.length !== 0){
            var course =  this.state.cisCourses[BFSqueue[0]]
            if (course.preReq !== []){
                for (let j in course.preReq){
                    if (!takenCourse.includes(course.preReq[j])){
                        takenCourse.push(course.preReq[j])
                        BFSqueue.push(course.preReq[j])
                }
            }
        }
        BFSqueue.shift()
    }

        // change message if there are any prereq courses that aren't taken
        if (takenCourse.length !== 0){
            message = "You are selecting certain course(s) without selecting its prereqs, do you want the webpage to include the following preReqs for you?\n\n" + takenCourse.slice(numChosen);
        }

        console.log(takenCourse);

        // check if user wants to goes to next page
        // ok: added all the needed prereqs to columnTaken /  and go to the nextPage
        // cancel: stay at the current page, no change
        nextPage = window.confirm(message);

        // delete them from original columns and add to columnTaken\

        if (nextPage){
            // filtered['columnTaken'].courseIds = this.state.columns['columnTaken'].courseIds.concat(takenCourse);
            filtered['columnTaken'].courseIds = takenCourse;

            for(let i = 0; i < takenCourse.length; i++){ 
                curCourse = this.state['cisCourses'][takenCourse[i]]
                belongedCol = curCourse.category;
                for (let j=0; j<filtered[belongedCol].courseIds.length; j++){
                    if ( filtered[belongedCol].courseIds[j] === takenCourse[i]) {
                        filtered[belongedCol].courseIds.splice(j, 1); 
                    }
                }
             }
        }

        const newState = {
            ...this.state,
            columns: filtered,
        }

        return {newState, nextPage};

    }

    //function for submit button
    submit(){
        // return the newstate and nextPage(bool)
        var {newState, nextPage} = this.checkBeforeSubmit();
        if (nextPage){
            this.props.ParentSubmit(newState);
        }
        
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

        // we can only drag to the course's category column or taken column
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

                    <InfoSection />
                </DragDropContext>
            </div>
            
        );
    }

}

export default WelcomePage;