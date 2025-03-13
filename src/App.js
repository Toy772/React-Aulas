import './App.css';
import { Component } from 'react';


class App extends Component{

  //STATES
  //---------------------------------------
    state = {
      cont:0,
      timeoutupdate: null,
      
      posts: [
        {
          id:1,
          title: `O titulo 1`,
          body: `O corpo 1`,
        },
        {
          id:2,
          title: `O titulo 2`,
          body: `O corpo 2`,
        },
        {
          id:3,
          title: `O titulo 3`,
          body: `O corpo 3`,
        },
      ]

  }
//------------------------------------

//FUNCTIONS 
//-----------------------------------------
componentDidMount(){
/*   .then(res => res.json())
  .then(posts => this.setState({posts})) */

  this.loadPosts();
}

componentDidUpdate(){

}

componentWillUnmount(){

}

loadPosts = async ()=>{
  const postRes = fetch('https://jsonplaceholder.typicode.com/posts');

  const photoRes = fetch('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postRes, photoRes]);
  const postJson = await posts.json();
  const photoJson = await photos.json();

  const postAndPhotos = postJson.map((post,index) =>{
    return {...post, cover: photoJson[index]}
  });
  this.setState({posts:postAndPhotos});

}


//RENDER   
//----------------------------------------------------------------  
  render(){
    const  {posts} = this.state

    return(
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title} />
              <div className='post-content' key={post.id}>
                <h1>{post.title} </h1>
                <p>{post.body}</p>
              </div>
            </div>          
         ))}
        </div>
      </section>
   
    )
  }
}

//---------------------------------------------------------------------



export default App;
