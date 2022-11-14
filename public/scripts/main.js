
const input1 = document.querySelector('#input-title');
const input2 = document.querySelector('#textarea-input');
const card = document.querySelector('.posts');
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function NewPost(){

    const title = document.querySelector('#input-title').value;
    const description = document.querySelector('#textarea-input').value;
    let _data = {
        title,
        description
    }
    const options = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(_data)
    }

    fetch('http://localhost:3000/api/new', options)
    .then(res => {
        console.log(res)
        updatePosts();
        document.querySelector('#input-title').value = '';
        document.querySelector('#textarea-input').value = '';
    }).catch(err => console.log(err))
    
   
}


function updatePosts(){
    
    fetch('http://localhost:3000/api/all')
        .then(res => {return res.json()})
        .then(data => {
            let postElements = '';

            let posts = JSON.parse(data);

            posts.forEach((post)=> {
                let postElement = `
                <div id='${post.id}' class="card">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body"> 
                        <div class="card-text">
                            ${post.description}
                        </div>
                        <Button  onclick="deletePost('${post.id}')">Delete</Button>
                    </div>
                </div>`;
            
                postElements += postElement;
            })
       card.innerHTML = postElements;

    })
}
function deletePost(id){
    fetch(`http://localhost:3000/api/remover/${id}`, {method: 'DELETE'}).then((res) => {
        window.location.reload();
    })
}
