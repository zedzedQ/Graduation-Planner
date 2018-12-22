import React from 'react';
import styled from 'styled-components';
import Course from './Course';
import { Droppable } from 'react-beautiful-dnd';

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
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
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
                        >
                            {
                                this.props.courses.map((course, index) => (
                                <Course key={course.id} course={course} index={index}/>
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