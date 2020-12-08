class Word {
    constructor(spelling, pos, definition, sentence) {
        this.spelling = spelling;
        this.pos = pos;
        this.definition = definition;
        this.sentence = sentence;
    }



    renderStudentWord() {
        let wordsContainer = document.getElementById("words-container")
        wordsContainer.innerHTML +=

        `
        <p>
            <b>Vocabulary Word:</b> ${this.spelling}</br>           
            <b>Part of speech:</b> ${this.pos}</br>
            <b>Definition:</b> ${this.definition}</br>
            <b>Sentence:</b> ${this.sentence}
             
        </p>
        `
    }





    renderWord() {
        let wordsContainer = document.getElementById("words-container")
        wordsContainer.innerHTML +=

        `
        <p>
            <b>Vocabulary Word:</b> ${this.spelling}</br>           
            <b>Part of speech:</b> ${this.pos}</br>
            <b>Definition:</b> ${this.definition}</br>
            <b>Sentence:</b> ${this.sentence}
             
        </p>
        `
    }







}