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
            <div>===========================</div>
            <h4>STUDENT: ${this.nickname}</h4>
            <li>${this.name} <b>::</b> ${this.email}</li> 

            <button class="wordlist" data-id=${this.id} onclick="fetchSingleWordList()">${this.nickname}'s words</button> 

            <button class="add-word" data-id=${this.id} onclick="showForm()">add a word for ${this.nickname}</button> 

            <button class="delete-button" data-id=${this.id} onclick="deleteStudent()">delete ${this.nickname}</button> 

        </ul>
        `

        
    }


}