import React from 'react';
import styled from 'styled-components';
import Course from './Course';
import { Droppable } from 'react-beautiful-dnd';
import ReactHover from '../ReactHover';
import './component.css'


const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
}

const CourseContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const CourseList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isHighlighted ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height = 100px;
    height: 140px;
    overflow: auto;
`;

export default class Column extends React.Component {
    render() {
        return (
            <CourseContainer>
                <Title>
                    {this.props.column.title}
                </Title>
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot)=>(
                        <CourseList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            isHighlighted={this.props.isHighlighted}
                        >


                            {
                                this.props.courses.map((course, index) => (
                                    <div>
                                        <ReactHover
                                            options={optionsCursorTrueWithMargin}>
                                            <ReactHover.Trigger type='trigger'>
                                            <Course key={course.id} course={course} index={index} />                     
                                            </ReactHover.Trigger>
                                            <ReactHover.Hover type='hover'>
                                                <div className={'hover'}>
                                                    <p>{course.courseTitle}</p>
                                                    <p>Prerequisite: {course.preReq.map((pre) => (pre + "; "))}</p>
                                                </div>
                                            </ReactHover.Hover>
                                        </ReactHover>
                                </div>
                                ))
                            }
                            {provided.placeholder}
                        </CourseList>
                    )}
                </Droppable>
            </CourseContainer>
        )
    }
}