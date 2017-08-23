export class AppComponent {
  StudentCollection:  Array<object> = [];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: string;

  messages = "" ;
  printing = false;

  private checkPatterns(value:any , pattern: RegExp): boolean{
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[A-z\s]+$/;
    const studYearPattern = /^[A-z\s]+$/;

    if (this.checkPatterns(this.studNo, studNumberPattern)&&
        this.checkPatterns(this.studFname, stringPattern)&&
        this.checkPatterns(this.studLname, stringPattern)&&
        this.checkPatterns(this.studProg, stringPattern)&&
        this.checkPatterns(this.studYr, studYearPattern)){

          this.studentRecord = {
            studNumber: this.studNo,
            studFirstName: this.studFname,
            studLastName: this.studLname,
            studProgram: this.studProg,
            studYear: this.studYr,
          };

          this.StudentCollection.push(this.studentRecord);
          this.messages = null;
          this.clearValues();

        }else{
          this.messages = 'Errors have benn encountered and therefore cannot continue'
          return false;
        }
  }
      listStudents(): void{
        this.printing = true;
        console.log('Showing stored students');
      }
      clearValues(): void{
        this.studNo = null;
        this.studFname = null;
        this.studLname = null;
        this.studProg = null;
        this.studYr = null;
      }


}