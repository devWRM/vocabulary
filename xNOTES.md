

ORIGINAL File:  student.js

renderStudent() {
        let studentsContainer = document.getElementById("students-container")
        studentsContainer.innerHTML +=
        `
        <ul>
        <div>___________________________</div>
        <h4>STUDENT: ${this.nickname}</h4>
            <li>${this.name} <b>::</b> ${this.email}</li> 

            <button class="wordlist" data-id=${this.id} onclick="fetchSingleWordList()">${this.nickname}'s words</button> 

            <button class="add-word" data-id=${this.id} onclick="showForm()">add a word for ${this.nickname}</button> 

            <button class="delete-button" data-id=${this.id} onclick="deleteStudent()">delete ${this.nickname}</button> 
            <div>===========================</div>

        </ul>
        `

        
    }









______________________________

In FILE         index.js
In FUNCTION     studentFormSubmission()

!!!  WORKS  !!!

if (apiStudent[0] === "Name can't be blank") {

            // debugger;
            throw new Error("Please fill in all the boxes.")
            // throw new Error(`${apiStudent.errors}`)

        } else if (apiStudent[0] === "Nickname can't be blank") {

            throw new Error("Please fill in all the boxes.")

        } else if (apiStudent[0] === "Email can't be blank") {

            throw new Error("Please fill in all the boxes.")

        } else { 
// debugger;
            
            let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
            student.renderStudent();

        }



______________________________

In FILE         index.js
In FUNCTION     studentFormSubmission()


 if (apiStudent[0] === "Name can't be blank") {

            // debugger;
            throw new Error("Please fill in all the boxes.")
            // throw new Error(`${apiStudent.errors}`)

        } else if (apiStudent[1] === "Nickname can't be blank") {

            throw new Error("Please fill in all the boxes.")

        } else if (apiStudent[2] === "Email can't be blank") {

            throw new Error("Please fill in all the boxes.")

        } else { 
            
            // debugger;
            let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
                    
            student.renderStudent();

        }


______________________________

In FILE         index.js
In FUNCTION     studentFormSubmission()

 if (apiStudent[0] === "Name can't be blank") {

            if (apiStudent[1] === "Nickname can't be blank") {

                if (apiStudent[2] === "Email can't be blank") {

                    // debugger;
                    throw new Error("Please fill in all the boxes.")
                    // throw new Error(`${apiStudent.errors}`)
                }
            }
        
        } else {
            
            // debugger;
            let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
                    
            student.renderStudent();

        }
______________________________

ORIGINAL
In FILE         index.js
In FUNCTION     studentFormSubmission()


  if (apiStudent[0] === "Name can't be blank" || apiStudent[1] === "Nickname can't be blank" || apiStudent[2] === "Email can't be blank") {

            // debugger;
            throw new Error("Please fill in all the boxes.")
            // throw new Error(`${apiStudent.errors}`)

        } else {
            
            // debugger;
            let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
                    
            student.renderStudent();

        }






