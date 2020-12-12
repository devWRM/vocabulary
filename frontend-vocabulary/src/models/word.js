class Word {
    constructor(id, spelling, pos, definition, sentence) {
        this.id = id;
        this.spelling = spelling;
        this.pos = pos;
        this.definition = definition;
        this.sentence = sentence;
        
    }



    renderStudentWord() {

        // let studentId = parseInt(event.target.dataset.id)
        // let wordsContainer = document.getElementById("words-container")
        // wordsContainer.innerHTML +=

        let wordList = document.querySelector("p")
        console.log(wordList)
        // wordList.innerHTML +=

        // `
        // <div>
        //     <b>Vocabulary Word:</b> ${this.spelling}</br>           
        //     <b>Part of speech:</b> ${this.pos}</br>
        //     <b>Definition:</b> ${this.definition}</br>
        //     <b>Sentence:</b> ${this.sentence}
             
        // </div>
        // `
    }





    renderWord() {
        let wordsContainer = document.getElementById("words-container")
        wordsContainer.innerHTML +=

        `
        <div>
            <b>Vocabulary Word:</b> ${this.spelling}</br>           
            <b>Part of speech:</b> ${this.pos}</br>
            <b>Definition:</b> ${this.definition}</br>
            <b>Sentences:</b> ${this.sentence}</br>

            <button type="button" class="delete-word btn btn-outline-info btn-sm" data-id=${this.id} onclick="deleteWord()">delete: ${this.spelling}</button>

            <div>______________________</div>
        </div>
        
        `
    }







}