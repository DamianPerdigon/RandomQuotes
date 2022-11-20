let btn = document.getElementById('btn');

let output = document.getElementById('output');

let quotes = ["It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known.", 
              "All we have to decide is what to do with the time that is given us.",
              "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You are on your own. And you know what you know. And YOU are the one who will decide where to go…",
              "It matters not what someone is born, but what they grow to be.",
              "But I, being poor, have only my dreams, I have spread my dreams under your feet. Tread softly because you tread on my dreams.",
              "Whatever our souls are made of, his and mine are the same.",
              "But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.",
              "Whenever you feel like criticizing anyone … just remember that all the people in this world have not had the advantages that you have had.",
              "Real courage is when you know you are licked before you begin, but you begin anyway and see it through no matter what.",
];

btn.addEventListener('click', function(){
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = quote;
})