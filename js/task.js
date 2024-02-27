// function userApp(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

function userApp(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userApp2(data))
    }

    function userApp2(data){
        console.log(data)
    }


    function userComment(){
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }

