
class Deck{
    constructor(){
        this.deck = [];
    }

    createDeck(){
        var suits = ['Spade', 'Club', 'Heart', 'Diamond'];
        var values = [ 2,3,4,5,6,7,8,9,10,11,12,13,14]
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let newCard = { Value: values[x], Suit: suits[i] };
                this.deck.push(newCard);
            }
        }
    }




    shuffleDeck(){
        let i = 0;
        let j = 0;
        let temp = 0;
        for (i = this.deck.length - 1 ; i > 0;i--){
            j = Math.floor(Math.random() * (i+1));
            temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
   



    dealCard(){
        let index = Math.floor(Math.random()*this.deck.length);
        let card = this.deck[index];
        this.deck.splice(index,1);
        return card;
    }
}

class Player{ 
    constructor(){
        this.score = 0;
        this.cards=[] ;
    }

    takeACard(card){
        this.cards.push(card);
    }
    
    
    playCard(){
        return this.cards.pop();
    }


    updateScore(){
        this.score++;
    }
}




class Game{
    constructor(){
        this.player1= new Player;
        this.player2 = new Player;
        this.deck = new Deck;
    }

    start(){
        alert(`Lets Play War`)

        


       const newDeck= this.deck
       newDeck.createDeck();
       newDeck.shuffleDeck();
       console.log(newDeck);





        for(let i = 0; i < 26; i++){
            let dealtCard= newDeck.dealCard();
            this.player1.takeACard(dealtCard);
            dealtCard = newDeck.dealCard();
            this.player2.takeACard(dealtCard);
        }




        for (let i =0; i <26; i++){
            let player1Hand= this.player1.playCard();
            let player2Hand= this.player2.playCard();




        console.log(player1Hand, player2Hand);



            if(player1Hand.Value > player2Hand.Value){
                this.player1.updateScore();
                console.log('Player 1 wins this Round');
            }
            else if (player1Hand.Value < player2Hand.Value){
                this.player2.updateScore();
                console.log('Player 2 Wins this Round!')
            }
            else{console.log('its a tie try again')}
            console.log(`Player 1 has: ${this.player1.score} points, Player 2 has: ${this.player2.score} points`)
        }




        if(this.player1.score> this.player2.score){
            alert(`Player 1 wins`)
        }
        else{ alert(`Player 2 wins`)}

        alert('Refresh to play again!!');

    }





}

let game= new Game;
game.start();