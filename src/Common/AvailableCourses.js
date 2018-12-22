import React from 'react';
import styled from 'styled-components';
import Column from './Column';

const SectionContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`;

// possible usage: <AvailableCourses sections={xxxx} state={this.state}>
// sections = ["cisupper", "cislower", ...] state is data we need like findDict, etc.
export default class AvailableCourses extends React.Component {
    render() {
        return (
            <SectionContainer>
                    {
                        
                        this.props.sections.map((sectionId, index) => {
                            const section = this.props.state.columns[sectionId]; // find the section in columns
                            const courses = section.courseIds.map(courseId => this.props.state.cisCourses[courseId]); // find the list of instances coressponding to the courseId in this section

                            // maybe delete this field?? (but it is usefel for mainPage logic)
                            const isDropDisabled = false;
                            const isHighlighted = this.props.state.highlightSection === sectionId;
                            // we need the column title for displaying so we pass it, which is section in our case here
                            return <Column key={section.id} column={section} courses={courses} isDropDisabled={isDropDisabled} isHighlighted={isHighlighted}/>;
                        })
                    }
            </SectionContainer>
        )
    }
}