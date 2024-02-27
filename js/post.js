function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

/*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild

*/

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML = `
        <h4> User -${post.userId} </h4>
        <h5> Post: ${post.title} </h5>
        <p> Post Description: ${post.body} </p>
        `;
        postContainer.appendChild(postDiv)

    }
}



// function deletePost(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });
// }

// function patchAPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

