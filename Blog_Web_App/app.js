useFetch=async ()=>{
    let blogsList= await fetch("https://jsonplaceholder.typicode.com/posts");
    let jList= await blogsList.json();
    return jList
}

const postContainer=document.getElementById("postContainer");
const userPostContainer=document.getElementById("userPostContainer")
const addPost=document.querySelector("button");
const creatorBox=document.getElementById("creatorBox")
const titlex=document.getElementById("titlex")
const bodyX=document.getElementById("bodyX")
const mainx=document.querySelector("main");

useFetch().then(arr=>{
    arr.forEach(post => {
        let ele=document.createElement('div');
        ele.classList="flex justify-between group items-center border-2 hover:shadow-xl shadow-lg p-2 rounded-xl";
        ele.innerHTML=`
        <div class="">
        <p class="text-2xl">${post.title} </p>
        <p>${post.body}</p>
        </div>
        <button class="bg-red-400 h-6 collapse group-hover:visible text-white px-2 bottom-20" onclick='this.parentElement.remove()'>x</button>
        `;
        ele.id=post.id

        postContainer.appendChild(ele)

    });
});

addPost.addEventListener("click",handleAddPost);


function handleAddPost(){
    creatorBox.classList.toggle('hidden')
    mainx.classList.toggle('hidden')
    titlex.focus()
}

function fun(){

}

function createNewPost(){
    let titleText=titlex.value;
    let bodyText=bodyX.value

    let ele=document.createElement('div');
        ele.classList="flex justify-between group items-center border-2 hover:shadow-xl shadow-lg p-2 rounded-xl";
        ele.innerHTML=`
        <div class="">
        <p class="text-2xl">${titleText} </p>
        <p>${bodyText}</p>
        </div>
        <button class="bg-red-400 h-6 collapse group-hover:visible text-white px-2 bottom-20" onclick='this.parentElement.remove()'>x</button>
        `;
        userPostContainer.appendChild(ele)
        mainx.classList.toggle('hidden')
        titlex.value=""
        bodyText.value=""
        creatorBox.classList.toggle('hidden')
    }