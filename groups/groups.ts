interface GorupsArray{
        room:number,
        id:string,
        pupils:Object[]
}
type findGroup={room:number}
class Groups{
    groupsArray:GorupsArray[]
    constructor(){
        this.groupsArray=[]
    }
    add(room:number){ 
       const roomId={room:room,id:"",pupils:[]}
       roomId.id=Math.random().toString(36).substr(2,9)
       this.groupsArray.push(roomId)
       return roomId.id
    }
    addPupil(groupId:string, pupil:string){
        const findIndex=this.groupsArray.findIndex(a=>a.id==groupId)
        this.groupsArray[findIndex].pupils.push(pupil)
    }
    removePupil(groupId:string,pupil:string){
        const findRoom=this.groupsArray.findIndex(a=>a.id==groupId)
        this.groupsArray[findRoom].pupils=this.groupsArray[findRoom].pupils.filter(a=>a!==pupil)
    }
    read(groupId:string){
        const findGroup=this.groupsArray.find(a=>a.id==groupId)
        Object.defineProperty(findGroup , "pupils",{
            enumerable:false
        })
        console.log(findGroup)
    }
    update(groupId:string , objectChange:findGroup){
        const findGroup=this.groupsArray.find(a=>a.id==groupId)
        findGroup?findGroup.room=objectChange.room:"Group not found"
    }
    readAll(){
        console.log(this.groupsArray)
    }
}





export {Groups}