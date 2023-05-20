useFetch=async ()=>{
    let blogsList= await fetch("https://jsonplaceholder.typicode.com/posts");
    let jList= await blogsList.json();
    return jList
}

const postContainer=document.getElementById("postContainer");
const addPost=document.querySelector("button");
const creatorBox=document.getElementById("creatorBox")
const title=document.getElementById("title")
const bodyX=document.getElementById("body")

useFetch().then(arr=>{
    arr.forEach(post => {
        let ele=document.createElement('div');
        ele.classList="border-2 p-4 rounded-xl";
        ele.innerHTML=`
        <p class="text-3xl">${post.title} </p>
        <p>${post.body}</p>
        <button class="" onclick='this.parentElement.remove()'>del</button>
        `;
        ele.id=post.id

        postContainer.appendChild(ele)
    });
});

addPost.addEventListener("click",handleAddPost);


function handleAddPost(){
    creatorBox.toggleAttribute("hidden")
}

function createNewPost(){
    console.log("SuccesFull..")
    let titleText=title.value;
    let bodyText=bodyX.value

    let ele=document.createElement('div');
        ele.classList="border-2 p-4 rounded-xl";
        ele.innerHTML=`
        <p class="text-3xl">${titleText} </p>
        <p>${bodyText}</p>
        <button class="" onclick='this.parentElement.remove()'>del</button>
        `;
        postContainer.appendChild(ele)
}