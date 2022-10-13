import  {useEffect, useState} from 'react'

const AsyncComp= () => {

const [posts,setPost] = useState([]) ;

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response)=> response.json()) 
    .then((data) => {setPost(data)} ) 
}, []) ;
return (
    <div>
        <ul>
            {posts.map(p=> <li key={p.id} >{p.title} </li>)}
        </ul>
    </div>
)

}

export default AsyncComp