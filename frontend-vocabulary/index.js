document.addEventListener("DOMContentLoaded", () => {
    fetchStudents()
    studentForm()

})

const BASE_URL = "http://localhost:3000"

// CRUD Read STUDENT
function fetchStudents() {
    fetch(`${BASE_URL}/students`)
    .then(resp => resp.json())
    .then(students => {
        for(const student of students) {
            let s = new Student(student.id, student.name, student.nickname, student.email)
            s.renderStudent();
        }
    })

}


// CRUD Create STUDENT
function studentForm() {
    let formDiv = document.getElementById("student-form")

    formDiv.innerHTML +=
        `
        <form id = "reset-form"> 
        Fill in all textboxes then click new student:</br>
            <input type="text" id="name" placeholder="name"></input></br>
            <input type="text" id="nickname" placeholder="nickname"></input></br>
            <input type="email" id="email" placeholder="email"></input></br>
            <input type="submit" value="new student">   
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
        
        let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
        student.renderStudent();
    })

    let thisForm = document.getElementById("reset-form")
    thisForm.reset()

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
    let hideStudents = document.getElementById("container")
    hideStudents.style.display = "none";

    let studentId = parseInt(event.target.dataset.id)
    addWordForm(studentId)
}

function addWordForm(id) {
    // let studentId = parseInt(event.target.dataset.id)

    let formDiv = document.getElementById("word-form")

    formDiv.innerHTML +=
        `
        <form id = "this-word-form"> 
        Enter a vocabulary word for ${id}:</br>
            <input type="string" id="spelling" placeholder="spell the word"></input></br>
            <input type="text" id="pos" placeholder="part of speech"></input></br>
            <input type="text" id="definition" placeholder="define word"></input></br>
            <input type="text" id="sentence" placeholder="use word in a sentence"></input></br>
            <input type="submit" value="new word">   
        </form>   
        `

    let thisWordForm = document.getElementById("this-word-form")
    thisWordForm.addEventListener("submit", wordFormSubmission(id))

}

function wordFormSubmission(id) {
    event.preventDefault()
    
    

    // INPORTANT: Remember to add .value to get data out of form <input> field
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
    
    fetch(`${BASE_URL}/words`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(wordFormInput)
    })
    .then(resp => resp.json())
    .then(apiWord => console.log(apiWord))



    // .then(apiStudent => {
        
    //     let student = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
    //     student.renderStudent();
    // })












    // let deleteWordForm = document.getElementById("word-form")
    // deleteWordForm.innerHTML = ""

    // let hideStudents = document.getElementById("container")
    // hideStudents.style.display = "none";

}





