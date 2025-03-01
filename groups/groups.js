"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    constructor() {
        this.groupsArray = [];
    }
    add(room) {
        const roomId = { room: room, id: "", pupils: [] };
        roomId.id = Math.random().toString(36).substr(2, 9);
        this.groupsArray.push(roomId);
        return roomId.id;
    }
    addPupil(groupId, pupil) {
        const findIndex = this.groupsArray.findIndex(a => a.id == groupId);
        this.groupsArray[findIndex].pupils.push(pupil);
    }
    removePupil(groupId, pupil) {
        const findRoom = this.groupsArray.findIndex(a => a.id == groupId);
        this.groupsArray[findRoom].pupils = this.groupsArray[findRoom].pupils.filter(a => a !== pupil);
    }
    read(groupId) {
        const findGroup = this.groupsArray.find(a => a.id == groupId);
        Object.defineProperty(findGroup, "pupils", {
            enumerable: false
        });
        console.log(findGroup);
    }
    update(groupId, objectChange) {
        const findGroup = this.groupsArray.find(a => a.id == groupId);
        findGroup ? findGroup.room = objectChange.room : "Group not found";
    }
    readAll() {
        console.log(this.groupsArray);
    }
}
exports.Groups = Groups;
