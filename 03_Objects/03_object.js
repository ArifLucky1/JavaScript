const course = {
    coursename: "js series",
    price: "999",
    courseInstructor: "Arif"
}

// course.courseInstructor

// const {courseInstructor} = course 
// console.log(courseInstructor);
const {courseInstructor: instructor} = course           // Object de-structure
// console.log(instructor);

