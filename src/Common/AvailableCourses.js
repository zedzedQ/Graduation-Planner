import React from 'react';
import styled from 'styled-components';
import Column from './Column';
const ColumnContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`;
const ColumnList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height = 100px;
`;

// possible usage: <AvailableCourses sections={xxxx} state={this.state}>
// sections = ["cisupper", "cislower", ...] state is data we need like findDict, etc.
export default class AvailableCourses extends React.Component {
    render() {
        return (
            <ColumnContainer>
                    <ColumnList>
                        {
                            this.props.sections.map((sectionId, index) => {
                                const section = this.props.state.columns[sectionId]; // find the section in columns
                                const courses = section.courseIds.map(courseId => this.props.state.cisCourses[courseId]); // find the list of instances coressponding to the courseId in this section
                                const isDropDisabled = false;
                                // we need the column title for displaying so we pass it, which is section in our case here
                                return <Column key={section.id} column={section} courses={courses} isDropDisabled={isDropDisabled}/>;
                            })
                        }
                        {provided.placeholder}
                    </ColumnList>
                )}
            </ColumnContainer>
        )
    }
}