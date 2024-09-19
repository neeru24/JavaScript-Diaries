// const newUser = new Object()
const newUser = {}

newUser.id = "123abc"
newUser.name = "neeru"
newUser.isLoggedIn = false

// console.log(newUser);

const regularUser = {
    email: "neeru@gmail.com",
    fullname: {
        userfullname: {
            firstname: "neeru",
            lastname: "gangarh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
const obj5 = Object.assign({}, obj1, obj2, obj4)

const obj6 = {...obj1, ...obj2}
console.log(obj6);



const users = [
    {
        id: 1,
        email: "ng@gmail.com"
    },
    {
        id: 1,
        email: "ng@gmail.com"
    },
    {
        id: 1,
        email: "ng@gmail.com"
    },
]


users[1].email
console.log(newUser);


console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));



console.log(newUser.hasOwnProperty('isLoggedIn'));



////////////////////////////// Objects de structure //////////////////// 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
