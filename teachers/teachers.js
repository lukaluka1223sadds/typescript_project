"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachers = void 0;
class Teachers {
    constructor() {
        this.teachersArray = [];
    }
    add(data) {
        const dataAddId = this.teacherAddId(data);
        if (dataAddId.description === undefined) {
            Object.defineProperty(data, "description", {
                enumerable: false
            });
        }
        this.verify(dataAddId) === false ? this.teachersArray.push(dataAddId) : "is arledy registred";
        return dataAddId.id;
    }
    read(teacher) {
        const t = this.teachersArray.find(a => a.id === teacher);
        if (t) {
            console.log(t);
        }
        else {
            console.log("teacher is not found");
        }
    }
    readAll() {
        console.log(this.teachersArray);
    }
    update(teacherId, updateProfile) {
        const findTeacher = this.teachersArray.findIndex(a => a.id == teacherId);
        this.teachersArray[findTeacher] = Object.assign(Object.assign({}, this.teachersArray[findTeacher]), updateProfile);
        return this.teachersArray[findTeacher].id;
    }
    remove(teacherId) {
        this.teachersArray = this.teachersArray.filter(a => a.id !== teacherId);
    }
    verify(teacherInformation) {
        const teacherInformation1 = this.teachersArray.find(a => a.id == teacherInformation.id);
        return teacherInformation1 == undefined ? false : true;
    }
    teacherAddId(addId) {
        const addid = addId;
        addid.id = Math.random().toString(36).substr(2, 9);
        return addid;
    }
}
const teachers = new Teachers();
exports.teachers = teachers;
