document.addEventListener("DOMContentLoaded", () => {
    fetchStudents()


})

const BASE_URL = "http://localhost:3000"


// CRUD Read
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




// CRUD Create





// CRUD Delete

