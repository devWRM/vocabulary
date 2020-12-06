class Student {
    constructor(id, name, nickname, email) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
    }


    renderStudent() {
        let studentsContainer = document.getElementById("students-container")
        studentsContainer.innerHTML +=
        `
        <ul>
            <h4>STUDENT: ${this.nickname}</h4>
            <li>${this.name} <b>::</b> ${this.email}</li>  
            <button class="delete-button" data-id=${this.id} onclick="deleteStudent()">delete</button>      
        </ul>
        
        `

        
    }


}