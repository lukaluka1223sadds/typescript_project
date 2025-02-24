interface Teacher{
        name: {
          first: string,
          last: string;
        },
        image: string,
        dateOfBirth: string,
        emails:
          {
            email: string,
            primary: boolean;
          }[]
        phones: 
          {
            phone: string,
            primary: boolean;
          }[],
        sex: string, 
        subjects: 
          {
            subject: string;
          }[]
        ,
        description?: string,
        id?:string
}

class Teachers <T extends string|undefined >{
    teachersArray:Teacher[]
    constructor(){
     this.teachersArray=[]
     
    }
    add(data:Teacher):string | undefined{
        const dataAddId=this.teacherAddId(data)
        if (dataAddId.description === undefined){
            Object.defineProperty(data , "description" , {
                enumerable:false
            })
        }
        this.verify(dataAddId)===false?this.teachersArray.push(dataAddId):"is arledy registred"
        return dataAddId.id
    }
    read(teacher:T):void{
        const t=this.teachersArray.find(a=>a.id===teacher)
        if (t){
        console.log(t)
        }else{
          console.log("teacher is not found")
        }
    }
    readAll():void{
      console.log(this.teachersArray)
    }
    update(teacherId:T,updateProfile:Teacher){
      const findTeacher=this.teachersArray.findIndex(a => a.id==teacherId)
      this.teachersArray[findTeacher]={...this.teachersArray[findTeacher],...updateProfile}
      return this.teachersArray[findTeacher].id
    }
    remove(teacherId:T):void{
      this.teachersArray=this.teachersArray.filter(a=>a.id!==teacherId)
    }
    verify(teacherInformation:Teacher):boolean{
        const teacherInformation1=this.teachersArray.find(a=>a.id==teacherInformation.id)
        return teacherInformation1==undefined?false:true;
    }
    teacherAddId(addId:Teacher):Teacher{
        const addid=addId
        addid.id=Math.random().toString(36).substr(2,9);
        return addid
    }
}

const teachers = new Teachers();
export {teachers}
