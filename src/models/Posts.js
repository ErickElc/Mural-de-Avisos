module.exports = {
    posts:[
    ],
    getAll(){
        return  this.posts;
    },
    newPost(title, description){
        this.posts.push({id: GerarID(), title, description})
        console.log(this.posts)
    },
    deletePost(id){
        for(let i in this.posts){
            if(this.posts[i].id === id){
                this.posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}
function GerarID(){
    return Math.random().toString(36).substring(2, 9)
}
