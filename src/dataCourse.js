class Course {
	constructor(id, courseNum, courseTitle, status, prerequisite, termAvailability) {
		this.id = id;
		this.courseNum = courseNum;
		this.courseTitle = courseTitle;
		this.status = status;
		this.prerequisite = prerequisite;
		this.termAvailability = termAvailability;
	}
}
module.exports = Course;
