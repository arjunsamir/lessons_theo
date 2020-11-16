// const myVar = 'hello';
// console.log(name);
// console.log(window.name);
// console.log(window);


// DOM API
// Document Object Model

// 1. SELECT AN ELEMNT

// document.addEventListener('load', function() {
//     console.log('hello');
//     console.log(document.querySelector("h1"));
// });


window.addEventListener('load', () => {

    const h1 = document.querySelector("#heading");
    console.log(h1);

    h1.addEventListener('click', function() {
        console.log(this.dataset);
        this.style.color = this.dataset.color;
    });

    const input = document.querySelector('input');
    //const button = document.querySelector('button');
    const form = document.querySelector('form');
    const greetingContainer = document.querySelector('#greeting');

    // button.addEventListener('click', function() {
    //     console.log(input);
    // })

    form.addEventListener('submit', function(event) {

        event.preventDefault();
        
        //console.log(event);

        const name = input.value;

        if (!name) return alert('please enter a name');

        const hour = new Date().getHours();

        let greeting = 'Hello';

        if (hour >= 5 && hour < 12) greeting = 'Good Morning';
        else if (hour <= 17) greeting = 'Good Afternoon';
        else if (hour <= 19) greeting = 'Good Evening';
        else if (hour < 24) greeting = 'Good Night';

        console.log(hour);

        // alert(greeting + ', ' + name + '. Hope you are good bro.');
        // alert(`${greeting}, ${name}. Hope you are good bro.`);

        greetingContainer.textContent = `${greeting}, ${name}. Hope you are good bro.`;

    });

});

// function addOne(num) {
//     return num + 1;
// }

// console.log( addOne(3) );