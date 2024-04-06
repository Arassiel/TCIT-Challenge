const {Pool} = require('pg');
const {randomBytes} = require('crypto');
const getData = 'SELECT * FROM posts';
const insertData = 'INSERT INTO posts (id, name, description) VALUES($1, $2, $3)';
const searchPostByName = 'SELECT * FROM posts WHERE name = $1';
const deleteData = 'DELETE FROM posts WHERE id = $1';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'allposts',
    port: '5432'
})

//obtener post
const getPosts = async (req,res) => {
    try{
        const dataSQL = await pool.query(getData);
        res.status(200).json(dataSQL.rows);
    }catch(e){
        console.log(e);
    }
}

//buscar post por nombre
const getPostByName = async (req, res) => {
    try{    
        const name = req.params.name;
        const postByName = await pool.query(searchPostByName,[name]);

        res.status(200).json(postByName.rows);
        
    }catch(e){
        console.log(e);
    }
}

//insertar post nuevos
const insertPost = async (req, res) => {
    try{    
        const {name, description} = req.body;
        const id = randomBytes(4).toString('hex');
        const response = await pool.query(insertData,[id,name, description]);

        console.log(response);

        res.json({
            message: 'Post added successfully',
            body: {id, name, description}
        })
        
    }catch(e){
        console.log(e);
    }
}

//borrar post
const deletePost = async (req, res) => {
    try{    
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
    
        const response = await pool.query(deleteData,[id]);

        console.log(response);

        res.json({
            message: 'Post deleted successfully',
            body:{id, name, description}
        })
        
    }catch(e){
        console.log(e);
    }

}

module.exports = {
    getPosts,
    insertPost,
    deletePost,
    getPostByName
}