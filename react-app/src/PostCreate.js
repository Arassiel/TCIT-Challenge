import React,{useState,useEffect} from "react";
import axios from "axios";


export default () => {

    const [post,setPost] = useState({
        name:'',
        description:''
    });

    const handleInput = async(event) => {
        setPost({...post, [event.target.name]: event.target.value})
        console.log(post);
    }

    function handleSubmit (event) {
        //event.preventDefault();
        console.log(post);
        
        axios.post('http://localhost:4000/posts',{
            name: post.name,
            description: post.description
        }).then((response) => console.log(response))
        .catch(err => console.log(err));

        
    }
return (
<div>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input
                type="text" 
                onChange={handleInput}
                name="name"
                placeholder="Insert post name"/>
            <div></div>
            <input
                type="text"
                onChange={handleInput}
                name="description"
                placeholder="Insert description"
                />
            <button className="btn btn-primary" >Submit</button>
        </div>
    </form>
</div>
    );
}