interface SubjectInterface{
    title: string,
    lessons: number,
    description?: string,
}

class Subject{
    title:string
    lessons:number
    description?:string
    id:string
    constructor({title,lessons,description}:SubjectInterface){
      this.title=title
      this.lessons=lessons
      this.description=description
      this.id=Math.random().toString(36).substr(2 , 9)
    }
}

class LMS{
    subjectArray:Subject[]
     constructor(){
        this.subjectArray=[]
        Object.defineProperty(this.subjectArray , "description" ,{
            enumerable:false,
            configurable:false,
            writable:false
        })
        
     }
    add(subject:Subject){
    if (this.verify(subject) === false ){
        if (subject.description == undefined){
            Object.defineProperty(subject , "description",{
            enumerable:false
        })
        }
        this.subjectArray.push(subject)
    }
    
    }
    remove(subject:Subject){
     this.subjectArray=this.subjectArray.filter(a=>a.id!==subject.id)
    }
    readAll(){
        console.log(this.subjectArray)
    }
    verify(subject: Subject) {
        const subjectFind = this.subjectArray.find(a => a.id === subject.id);
        return subjectFind !== undefined;
    }
}




export {Subject , LMS}