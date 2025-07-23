// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) =>response.json())
// .then((data) =>console.log(data));

function sendHTTPRequest(method, url, data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

async function fetchPosts(){
    const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts" );
    console.log(responseData);
    const listOfPosts = responseData;

    for (const post of listOfPosts){
        const postContainer = document.createElement("article");
        postContainer.id = post.id
    }
}