class Student {
    constructor(id, name, nickname, email) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;

        Student.all.push(this)
        
    }



    static findById(id) {
        return this.all.find(student => student.id === id)
    }



    renderStudent() {
        let studentsContainer = document.getElementById("students-container")
        studentsContainer.innerHTML +=
        `
        <div  id=${this.id} data-id=${this.id}>
            <ul>
            <h4>STUDENT: ${this.nickname}</h4>
                <li>${this.name} <b>::</b> ${this.email}</li> 

                <button type="button" class="wordlist btn btn-outline-info" data-id=${this.id} onclick="fetchSingleWordList()">${this.nickname}'s words</button> 

                <button type="button" class="add-word btn btn-outline-info" data-id=${this.id} onclick="showForm()">add a word for ${this.nickname}</button> 

                <button type="button" class="delete-button btn btn-outline-info" data-id=${this.id} onclick="deleteStudent()">delete ${this.nickname}</button> 
                <div>===========================</div>

            </ul>
        </div>
        `       
    }
}


Student.all = []

