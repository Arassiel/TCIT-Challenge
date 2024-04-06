import React,{useEffect,useState} from 'react';
import PostCreate from './PostCreate';
import axios from 'axios';
import './Table.css';

export default () => {

  const [posts, setPosts] = useState({});
  const [records, setRecords] = useState(posts);

  const fecthPosts = async () => {
    await axios.get('http://localhost:4000/posts')
    .then(res => {
        setPosts(res.data)
        setRecords(res.data);
    })
    .catch(e => console.log(e));
  };

  useEffect( () => {
    fecthPosts();
  }, []);

const Filter = (event) =>{
  setRecords(posts.filter(f => f.name.toLowerCase().includes(event.target.value)));
}

return (<div className="container">
  <h2>Create Post</h2>
    <PostCreate />
    <hr />
  <h2>All Post</h2>
    <div className="container-table">
      <input type='text' className='form-control' onChange={Filter} placeholder='Search'/>
      <table className="table-scroll small-first-col">
        <thead>
          <tr>
            <th>
              Name
            </th> 
            <th>
              Description
            </th>
          </tr>
        </thead>            
        <tbody className="body-half-screen">{Object.values(records).map((d,i) =>(
          <tr className="tr-1" key = {i}>
            <td >
              {d.name}
            </td>
            <td>
              {d.description}
              <button className="delete-btn" onClick={() => {
                axios.delete('http://localhost:4000/posts/'+d.id)
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
                console.log(d)
              }} >Delete</button>
            </td>
          </tr>
          )) }
        </tbody>
      </table>
    </div>
</div>);
}
