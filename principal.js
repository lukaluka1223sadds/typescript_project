"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subjects_1 = require("./subject/subjects");
//         SUBJECT IMPLEMENTATION
console.log("//////////SUBJECT IMPLEMENTATION");
const historya = new subjects_1.Subject({
    title: 'History',
    lessons: 24,
});
const history2 = new subjects_1.Subject({
    title: 'H',
    lessons: 22,
    description: "asdllllllkjklijl"
});
const history3 = new subjects_1.Subject({
    title: 'His',
    lessons: 34,
    description: "hiadsadsadas"
});
const lms = new subjects_1.LMS();
lms.add(historya);
lms.add(history2);
lms.add(history3);
// lms.remove(historya);
lms.readAll();
console.log(lms.verify(historya));
//           TEACHERS IMPLEMENTATION
console.log("/////////TEACHERS IMPLEMENTATION");
const teachers_1 = require("./teachers/teachers");
const data = {
    name: {
        first: "enza",
        last: "?"
    },
    image: "https://img.com",
    dateOfBirth: "00/00/0000",
    emails: [{
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
};
// forupdate
const updatedProfile = {
    name: {
        first: "enzas",
        last: "?"
    },
    image: "https://img.com",
    dateOfBirth: "11/11/1111",
    emails: [{
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
};
const teacherId = teachers_1.teachers.add(data);
// teachers.read(teacherId)
const teacherId2 = teachers_1.teachers.add(updatedProfile);
// const teacherId1 = teachers.update(teacherId, updatedProfile)
// teachers.remove(teacherId)
teachers_1.teachers.readAll();
//         PUPIL IMPLEMENTATION
const pupils_1 = require("./pupils/pupils");
const data1 = {
    name: {
        first: "luka",
        last: "magradze"
    },
    image: "https://image.com",
    dateOfBirth: "21/08/2004",
    phones: [
        {
            phone: "321 092 8293",
            primary: true
        }
    ],
    sex: "male",
    description: "im luka and in 16 yers old",
};
const data2 = {
    name: {
        first: "lula",
        last: "magr"
    },
    image: "https://image.com",
    dateOfBirth: "21/08/2004",
    phones: [
        {
            phone: "334 492 8293",
            primary: false
        }
    ],
    sex: "female",
};
const updatedProfile1 = {
    name: {
        first: "lulaa",
        last: "magraaaaa"
    },
    image: "https://image.com",
    dateOfBirth: "21/08/2004",
    phones: [
        {
            phone: "334 492 8254",
            primary: true
        }
    ],
    sex: "female",
};
const pupils1 = new pupils_1.Pupils();
const pupil1 = pupils1.add(data1);
const pupil2 = pupils1.add(data2);
pupils1.read(pupil1);
pupils1.readAll();
pupils1.update(pupil2, updatedProfile1);
//  pupils.remove(pupil)
pupils1.readAll();
