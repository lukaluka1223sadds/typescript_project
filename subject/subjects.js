"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
class Subject {
    constructor({ title, lessons, description }) {
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        this.id = Math.random().toString(36).substr(2, 9);
    }
}
exports.Subject = Subject;
class LMS {
    constructor() {
        this.subjectArray = [];
        Object.defineProperty(this.subjectArray, "description", {
            enumerable: false,
            configurable: false,
            writable: false
        });
    }
    add(subject) {
        if (this.verify(subject) === false) {
            if (subject.description == undefined) {
                Object.defineProperty(subject, "description", {
                    enumerable: false
                });
            }
            this.subjectArray.push(subject);
        }
    }
    remove(subject) {
        this.subjectArray = this.subjectArray.filter(a => a.id !== subject.id);
    }
    readAll() {
        console.log(this.subjectArray);
    }
    verify(subject) {
        const subjectFind = this.subjectArray.find(a => a.id === subject.id);
        return subjectFind !== undefined;
    }
}
exports.LMS = LMS;
