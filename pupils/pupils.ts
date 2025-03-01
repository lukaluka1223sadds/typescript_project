interface PupilsInterface{
        name: {
          first: string,
          last: string
        },
        image: string,
        dateOfBirth: string,
        phones: 
          {
            phone: string,
            primary: boolean
          }[],
        sex: string,
        description?: string
        id?:string
}
type addPupil={add(data:PupilsInterface):string}
type ispupil={(pupilid:string):number}

class Pupils implements addPupil{
    PupilsArray:PupilsInterface[]
     constructor(){
        this.PupilsArray=[]
    }
    add(data:PupilsInterface):string{
        const dataAddId=data
        dataAddId.id=Math.random().toString(36).substr(2,9)
        if(dataAddId.description==undefined){
            Object.defineProperty(data , "description",{
             enumerable:false,
            })
        }
       
        const verifyPupil=this.verify(data)?"is alrady registred":this.PupilsArray.push(data)
        return dataAddId.id
    }
    read(PupilId:string):void{
      const isPupil:ispupil=(pupilid)=>{
        return this.PupilsArray.findIndex(a=>a.id===pupilid)
      }
       let pupilFindIndex=this.PupilsArray[isPupil(PupilId)]
       if(pupilFindIndex){
        const pupilCopy={...pupilFindIndex}
        {Object.defineProperty(pupilCopy , "id",{
             enumerable:false
        })}
        console.log(pupilCopy)
       }else{
        console.log("pupil is not found")
       }
    } 
    readAll():void{
        console.log(this.PupilsArray)
    }
    verify(PupilVerify:PupilsInterface):boolean{
        const findPupil=this.PupilsArray.find(a=>a.id == PupilVerify.id)
        return findPupil==undefined?false:true
    }
    update(pupilId:string,updatedProfile:PupilsInterface):string | undefined{
    const findPupilIndex=this.PupilsArray.findIndex(a=>a.id ==pupilId)
        this.PupilsArray[findPupilIndex]={...this.PupilsArray[findPupilIndex],...updatedProfile}
        return this.PupilsArray[findPupilIndex].id
    }
    remove(pupilId:string):void{
     this.PupilsArray=this.PupilsArray.filter(a=>a.id !==pupilId)
    }
}

export {Pupils}