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

// ***********JSON*******************

{
    "name": "Arif",                                   //object ka name hota h.. sirf {} use krna matlb JSON h..
    "coursename": "js on youtube",                    // JSON me key or values dono String me hoti h..
    "price": "free"
}

[
    {},                                         //may be in form of array also.. Api.
    {},
    {}
]