document.addEventListener("DOMContentLoaded", () => {
    fetchStudents()
    studentForm()

    // fetchWords()
    // fetchSingleWordList()
    // fetchSingleStudent()

})

const BASE_URL = "http://localhost:3000"

// CRUD Read STUDENT (index list of ALL students)
function fetchStudents() {
    fetch(`${BASE_URL}/students`)
    .then(resp => resp.json())
    .then(students => {
        for(const student of students) {
            let s = new Student(student.id, student.name, student.nickname, student.email)
            s.renderStudent();
        }
    })
    .catch(err => console.log(err))
}


// CRUD Create STUDENT
function studentForm() {
    let formDiv = document.getElementById("student-form")

    formDiv.innerHTML +=
        `
        <form id = "this-student-form"> 
        <div>______________________________________________</div>

        Fill in all textboxes then click new student:</br>
            <input type="text" id="name" placeholder="name"></input></br>
            <input type="text" id="nickname" placeholder="nickname"></input></br>
            <input type="email" id="email" placeholder="email"></input></br>
            <input type="submit" class="btn btn-info btn-sm" value="new student">   

        <div>______________________________________________</div>
        </form>   
        `

    formDiv.addEventListener("submit", studentFormSubmission)
}

function studentFormSubmission() {
    event.preventDefault()

    // INPORTANT: Remember to add .value to get data out of form <input> field
    let name = document.getElementById("name").value
    let nickname = document.getElementById("nickname").value
    let email = document.getElementById("email").value

    let studentFormInput = {
        name: name,
        nickname: nickname,
        email: email
    }

    // If you're passing in the variables, & function parameters have same name as the object keys:
    // you can use single naming =>>   let studentFormInput = {name, nickname, email}
    
    fetch(`${BASE_URL}/students`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(studentFormInput)
    })
    .then(resp => resp.json())
    .then(apiStudent => {
        // debugger;
        
        if (apiStudent[0] === "Name can't be blank" || apiStudent[0] === "Nickname can't be blank" || apiStudent[0] === "Email can't be blank") {

            throw new Error("Please fill in all the boxes.")

        } else { 
// debugger;
            
            let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
            student.renderStudent();

            let thisForm = document.getElementById("this-student-form")
            thisForm.reset()
        }
       
    })
    .catch(alert)


}


// CRUD Delete STUDENT
function deleteStudent() {
   
   
    let studentId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/students/${studentId}`, {
        method: "DELETE"
    })
        
    this.location.reload()
}


// CRUD Create WORD
function showForm() {

    // debugger;

    let hideStudents = document.getElementById("hide-students-container")
    hideStudents.style.display = "none";

    let hideWords = document.getElementById("hide-words-container")
    hideWords.style.display = "none";

    // let studentId = event.target.dataset.id
    let studentId = parseInt(event.target.dataset.id)
    addWordForm(studentId)
}

function addWordForm(id) {
    
    // let studentId = parseInt(event.target.dataset.id)

    let formDiv = document.getElementById("word-form")

    // let studentName = fetchSingleStudent(id)
    formDiv.innerHTML +=
        `
        <form id = "this-word-form"> 
        Enter a vocabulary word for ${id}:</br>
            <input type="string" id="spelling" name="spelling" placeholder="spell the word"></input></br></br>
            <input type="string" id="pos" name="pos" placeholder="part of speech"></input></br></br>
            <textarea type="text" id="definition" name="definition" placeholder="define word" rows="5" cols="50"></textarea></br></br>
            <textarea type="text" id="sentence" name="sentence" placeholder="use the word in sentences" rows="10" cols="50"></textarea></br></br>
            
            <input type="submit" value="new word">
            <button id="cancel-add-word" onclick="reloadPage()">cancel</button>
        </form>   
        `

    let thisWordForm = document.getElementById("this-word-form")
    thisWordForm.addEventListener("submit", () => {wordFormSubmission(id)})   
        // thisWordForm.addEventListener("submit", wordFormSubmission(id))  <<= needs to be a block function

}


function wordFormSubmission(id) {
    
    event.preventDefault()
    
    // INPORTANT: Remember to add .value to get data out of form <input> field

    // let spelling = event.target.spelling.value
    // let pos = event.target.pos.value
    // let definition = event.target.definition.value
    // let sentence = event.target.sentence.value


    let spelling = document.getElementById("spelling").value
    let pos = document.getElementById("pos").value
    let definition = document.getElementById("definition").value
    let sentence = document.getElementById("sentence").value

    let wordFormInput = {
        spelling: spelling,
        pos: pos,
        definition: definition,
        sentence: sentence,
        student_id: id

    }

// wordFormInput object successfully created

    fetch(`${BASE_URL}/students/${id}/words`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(wordFormInput)
    })
    .then(resp => resp.json())
    .then(apiWord => { //console.log(apiWord)
        // fetchSingleWordList(id)
        this.location.reload()
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    });

    // .then(apiWord => {
    //     let word = new Word(apiWord.id, apiWord.spelling, apiWord.pos, apiWord.definition, apiWord.sentence, apiWord.student_id)
    //     word.renderWord();
    // })

}


// DELETE ALL WORDS
function deleteAllWords() {
    fetch(`${BASE_URL}/words`, {
        method: "DELETE"
    })

    this.location.reload()
}


// WORKING CRUD Read WORD (index list of ALL words) =>>     WORKS
function fetchWords() {

    let wordsContainer = document.getElementById("words-container")
    wordsContainer.innerHTML = `<h4>ALL WORDS List:</h4> <button type="button" class="deleted-words btn-sm" onclick="deleteAllWords()">delete ALL words</button>`

    

    fetch(`${BASE_URL}/words`)
    .then(resp => resp.json())
    .then(apiWords => { // console.log(apiWords)

        for(const word of apiWords) {
            let jsWord = new Word(word.id, word.spelling, word.pos, word.definition, word.sentence)
            jsWord.renderWord();
        }
        
    })
}



// WORKING CRUD Read WORD (single wordlist for each student)    =>>   WORKS
function fetchSingleWordList() {

    let studId = parseInt(event.target.dataset.id)
    // let studName = fetchSingleStudent(studId)
    let studName = (Student.findById(studId)).nickname

// I need the student object

    fetch(`${BASE_URL}/students/${studId}/words`)
    .then(resp => resp.json())
    .then(apiWords => { // console.log(apiWords)

        let wordsContainer = document.getElementById("words-container")
        // wordsContainer.innerHTML = `SELECTED STUDENT Word List: `
        wordsContainer.innerHTML = `<h4>${studName.toUpperCase()}'s word list:</h4> `

        if (apiWords.length == 0) {
            wordsContainer.innerHTML += `<div>${studName} does not have any words yet.</div>`
        } else {

            for(const word of apiWords) {
                let jsWord = new Word(word.id, word.spelling, word.pos, word.definition, word.sentence)
                // jsWord.renderStudentWord();

                jsWord.renderWord();
            }
        }
        
    })
    .catch(function(error) {
        alert("Oops!");
        console.log(error.message);
      });

}


// WORKING CRUD Delete WORD     =>>   WORKS
function deleteWord() {

    let wordId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/words/${wordId}`, {
        method: "DELETE"
    })

    this.location.reload()

}



function reloadPage() {
    this.location.reload()
}



// WORKING CRUD Read STUDENT (single student) =>>   WORKS
function fetchSingleStudent(studId) {
    fetch(`${BASE_URL}/students/${studId}`)
    .then(resp => resp.json())
    .then(apiStudent => { // console.log(apiStudent)

            let s = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
          
            // console.log(`${s.nickname} is from the fetchSingleStudent function`)
            // s.renderStudent();
       
    })
}



function findStudent(id) {
    function fetchStudents() {
        fetch(`${BASE_URL}/students`)
        .then(resp => resp.json())
        .then(students => { console.log(students)

            // for(const student of students) {
            //     let s = new Student(student.id, student.name, student.nickname, student.email)
                
            //     if (student.id == id) {
            //         return student.name
            //     }

            // }
        })
    }
}







