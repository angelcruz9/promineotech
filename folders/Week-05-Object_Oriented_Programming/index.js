class StudentGrad {
    constructor(name , gradYear){
        this.name = name;
        this.gradYear = gradYear;
    }
    describe(){
        return `${this.name} Graduated in ${this.gradYear}`;
    }
  }

class School{
    constructor(schoolName){
        this.schoolName = schoolName;
        this.students =[];
    }
    addStudent(student){
        if (student instanceof StudentGrad){
           this.students.push(this.students);
        }else{
            throw new Error(`You can Only Add current and previous student with GradYear ${StudentGrad}`);
        }
    }
    describe(){
        return `${this.School} has ${this.students.length} students alumni `
    }
}

class Menu {
    constructor(){
        this.schools = [];
        this.selectedSchool = null;

    }
    start(){
        let selection =  this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.addSchool();
                    break;
                case '2':
                this.viewSchools();
                break;
                case '3':
                    this.deleteSchool();
                    break;
                case '4':
                    this.displaySchools();
                    break;
                 default:
                    selection = 0;
                
              }
             selection = this.showMainMenuOptions(); 
        }
        alert('Goodbye');
    }

    showMainMenuOptions(){
        return prompt(`
        0)EXIT
        1)ADD SCHOOL
        2)VIEW SCHOOL
        3)DELETE SCHOOL
        4)VIEW ALL SCHOOLS
        `)
    }
    showSchoolMenuOptions(schoolInfo){
        return prompt(`
        0)back
        1)ADD STUDENT
        2)DELETE STUDENT
        ---------------
        ${schoolInfo}`);
    }

    displaySchools(){
        let schoolString = '';
        for (let i = 0; i< this.schools.length ; i++){
            schoolString += i + ')' + this.schools[i].schoolName + '\n';
        }
        alert(schoolString);
    }

    addSchool(){
       let schoolName = prompt('Enter name for new school')
       this.schools.push(new School (schoolName));
    }

    viewSchools(){
        let index = prompt ('Enter the index number for the school you wish to view');
        if (index > -1 && index < this.schools.length){
            this.selectedSchool = this.schools[index];
            let discription =  'School name:' + this.selectedSchool.schoolName + '\n';

            for( let i = 0 ; i < this.selectedSchool.students.length; i++){
                discription += i + ')' + this.selectedSchool.students[i].name
                 + '-' + this.selectedSchool.students[i].gradYear + '\n';

            }

        let selection = this.showSchoolMenuOptions(discription);
            switch (selection) {
                case '1':
                    this.createStudent()
                    
                    break;
                case '2':
                    this.deleteStudent()
            
            }
        }
    }
    deleteSchool(){
        let index = prompt('Enter index number of school ypu wish to remove')
        if(index > -1 && index < this.schools.length){
            this.schools.splice(index , 1);
        }
    }


    createStudent(){
        let name = prompt('Enter name for new student');
        let gradYear = prompt('Enter Graduation year');
        this.selectedSchool.students.push(new StudentGrad (name , gradYear));
    }

    deleteStudent(){
        let index = prompt('Enter index number of student you wish to delete');
        if (index> -1 && index < this.selectedSchool.students.length){
            this.selectedSchool.students.splice(index , 1);
        }
    }
    }


    let menu = new Menu();
    menu.start();



