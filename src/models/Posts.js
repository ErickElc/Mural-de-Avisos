module.exports = {
    posts:[

        {
            id: 0,
            title: "Primeiro Titulo!",
            description: "TESTE"
        }
    ],
    getAll(){
        return  this.posts;
    },
    newPost(title, description){
        this.posts.push({id: GerarID(), title, description})
    },
    deletePost(index){
        if(this.posts[index]){
            this.posts.splice(index, 1)
            if(!this.posts[index]){
                return true;
            }
        }
        return false;
    }
}

function GerarID(){
    return Math.random().toString(36).substring(2, 9)
}
