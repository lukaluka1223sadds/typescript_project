"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    constructor() {
        this.PupilsArray = [];
    }
    add(data) {
        const dataAddId = data;
        dataAddId.id = Math.random().toString(36).substr(2, 9);
        if (dataAddId.description == undefined) {
            Object.defineProperty(data, "description", {
                enumerable: false,
            });
        }
        const verifyPupil = this.verify(data) ? "is alrady registred" : this.PupilsArray.push(data);
        return dataAddId.id;
    }
    read(PupilId) {
        const isPupil = (pupilid) => {
            return this.PupilsArray.findIndex(a => a.id === pupilid);
        };
        let pupilFindIndex = this.PupilsArray[isPupil(PupilId)];
        if (pupilFindIndex) {
            const pupilCopy = Object.assign({}, pupilFindIndex);
            {
                Object.defineProperty(pupilCopy, "id", {
                    enumerable: false
                });
            }
            console.log(pupilCopy);
        }
        else {
            console.log("pupil is not found");
        }
    }
    readAll() {
        console.log(this.PupilsArray);
    }
    verify(PupilVerify) {
        const findPupil = this.PupilsArray.find(a => a.id == PupilVerify.id);
        return findPupil == undefined ? false : true;
    }
    update(pupilId, updatedProfile) {
        const findPupilIndex = this.PupilsArray.findIndex(a => a.id == pupilId);
        this.PupilsArray[findPupilIndex] = Object.assign(Object.assign({}, this.PupilsArray[findPupilIndex]), updatedProfile);
        return this.PupilsArray[findPupilIndex].id;
    }
    remove(pupilId) {
        this.PupilsArray = this.PupilsArray.filter(a => a.id !== pupilId);
    }
}
exports.Pupils = Pupils;
