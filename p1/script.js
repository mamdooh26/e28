
let app = new Vue({
    el: '#app',
    data: {
        userInput:null,
        failed: false,
        low: false,
        gameOver: false,
        attempt: 3,
        high: false,
        feedback: false,
        correct: false,
        RandomNumber: null
    },
    methods: {
        GuessNumber: function () {
            this.correct = this.userInput == this.RandomNumber;
            this.feedback = true;
            if (this.attempt <= 1){
                this.gameOver = true
                this.high = false
                this.low = false 
            }else
            {
                if(this.userInput > this.RandomNumber && this.attempt > 0){
                    this.high = true
                    this.low = false
                    this.failed = true 
                    this.attempt --   
                }
                else if(this.userInput < this.RandomNumber && this.attempt > 0) {
                    this.low = true
                    this.high = false
                    this.failed = true
                    this.attempt --
                }
        }
        },

        PlayAgain: function () {
            this.correct = false
            this.high = false
            this.low = false
            this.gameOver = false
            this.failed = null
            this.attempt = 3
            this.RandomNumber = this.RandomNumber = Math.floor(Math.random() * Math.floor(100));
        }
    },

    created () {
        this.RandomNumber = this.RandomNumber = Math.floor(Math.random() * Math.floor(100));
    }
    
});