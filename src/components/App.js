  import Post from "./Post";
  import Header from "./Header";
  import { useState } from "react";

  let initialPosts = [
    {  id: 12, text: "Bonjour tout le monde", author:"hugo bordes", likes: 42},
    {  id: 55, text: "comment allez-vous", author:"Antoine Morin", likes: 35},
    {  id: 90, text: "vive react.js", author:"Léa Dumont", likes: 17},
  ]


  function App(){

    const [posts, setPosts] = useState(initialPosts )

    const deletePost =(id) =>{
      setPosts(posts.filter(p=>p.id != id))
    }

    
    return(
      <>
        <Header />

        <h3>Fil d'actualité</h3>
        

        {posts.map(p=><Post key={p.id} postData={p} deletePost={deletePost} />)}
      
      </>
      )
    }
  export default App;

