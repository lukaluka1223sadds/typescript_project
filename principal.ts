import {Subject, LMS} from "./subject/subjects"

//    SUBJECT IMPLEMENTATION
console.log("//////////SUBJECT IMPLEMENTATION")


const historya = new Subject({
    title: 'History',
    lessons: 24,
});

const history2 = new Subject({
    title: 'H',
    lessons: 22,
    description:"asdllllllkjklijl"
});

const history3 = new Subject({
    title: 'His',
    lessons: 34,
    description:"hiadsadsadas"
});

const lms = new LMS();

lms.add(historya);
lms.add(history2);
lms.add(history3);

// lms.remove(historya);
lms.readAll()
console.log(lms.verify(historya))


//    TEACHERS IMPLEMENTATION
console.log("/////////TEACHERS IMPLEMENTATION")


import { teachers } from "./teachers/teachers";

const data={
    name: {
      first: "enza",
      last: "?"
    },
    image: "https://img.com",
    dateOfBirth: "00/00/0000",
    emails:[{
        email: "enza@gmail.com",
        primary: false
      }],
    phones: [
      {
        phone: "213 321 4121",
        primary: false
      }
    ],
    sex: "female", 
    subjects: [
      {
        subject: "history"
      }
    ],
    description: "my name is enza"
}


 // forupdate

 const updatedProfile={   
  name: {
    first: "enzas",
    last: "?"
  },
  image: "https://img.com",
  dateOfBirth: "11/11/1111",
  emails:[{
      email: "enza@gmail.com",
      primary: false
    }],
  phones: [
    {
      phone: "213 321 4121",
      primary: true
    }
  ],
  sex: "female", 
  subjects: [
    {
      subject: "history"
    }
  ],
  description: "my name is enza"
}



const teacherId = teachers.add(data);
// teachers.read(teacherId)
const teacherId2=teachers.add(updatedProfile)

// const teacherId1 = teachers.update(teacherId, updatedProfile)

// teachers.remove(teacherId)
teachers.readAll()
