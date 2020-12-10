



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






