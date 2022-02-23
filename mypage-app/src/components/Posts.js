import axios from "axios";
import {Component} from "react";

const API_URL="https://jsonplaceholder.typicode.com/posts"
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state ={
            Posts:[],
            id:"",
            userid:"",
            title:"",
            body:"",
            error:{
                userid:"",
                title:"",
                body:"",
                },
        };
        console.log("constructor");
    }


    handlechange =({target:{name,value}})=>{
       const error={...this.state.error};
        switch(name){
        case "userid":{
        //validatation of userid
        error.userid=!value ? "Please enter correct id":"";
        break;
        }
        case "title":{
          //validatation of title
          error.title=!value ? "Please enter correct Title":"";
          break;
        }
        case "body" :{
          //validatation of body
          error.body=!value ? "Please enter your correctody ":"";
        break;
         }
        
        }
          console.log(error);
          this.setState({...this.state,[name]:value,error});
        };

        handleSubmit=(e)=>{
            e.preventDefault();
            return this.state.id ? this.updatePost() : this.createPosts();
        //     if(this.state.id) this.updatePost();
        //     else
        //    // console.log(this.state)
        //     this.createPosts();
        };

    //cratePost
    createPosts= async()=>{
        try{
            const {userid,title,body}=this.state;
            const {data}=await axios.post(API_URL,{
                userid,
                title,
                body,

            });
           // console.log(data);
            const posts =[...this.state.Posts];
            posts.push(data);
            this.setState({posts,userid: "",body:"",title:""});
        }
        catch(err){
            console.log(err);
        }
    };



    //GetPosts
    getPosts= async()=>{
        try{
            const {data:Posts}=await axios.get(API_URL);
            console.log(Posts);
            this.setState({Posts});
        }
        catch(err){
            console.log(err);
        }
    };

//updataPost
//    editPost =(post)=>{
//        console.log(post);
//        this.setState({id:post.id,userid:post.userid,title:post.title,body:post.body});
//    };
   
// };

// editPost =(post)=>{this.setState({...post});

updatePost= async()=>{
    try{
        const {id,userid,title,body}=this.state;
        const {data}=await axios.put(`${API_URL}/${id}`, {
            userid,
            title,
            body,

        });
        //this.setState({Posts:this.state.Posts.filter((post)=>post.id ===id),
        const index=this.state.Posts.findIndex((post)=>post.id===id);
        const posts =[...this.state.Posts];
        posts[index] =data;
        this.setState({posts,id:"",userid:"",title:"",body:""});
          }
    catch(err){
        console.log(err);
    }
};

    //DeletePost
    deletePosts= async(id)=>{
       // console.log(id);
        try{
            await axios.delete(`${API_URL}/${id}`);
            
            this.setState({Posts:this.state.Posts.filter((post)=>post.id !==id),
        });
        }
        catch(err){
            console.log(err);
        }
    };


    componentDidMount(){
        console.log("ComponentDidMount")
        this.getPosts();
    }
render()
{
    console.log(this.props)
    console.log("render")
  return <>
    <h3>Post Application</h3> 
         <form onSubmit={this.handleSubmit}>
         {this.state.id && (
         <>
         <div>
             <lable>Id:</lable><input value={this.state.id} disabled />
             </div>
             <br />
             </>
             )}
             <div>
            <lable>UserId</lable>
            <input type="number" name="userid" value={this.state.userid}  Placeholder="Enter the user id" 
            onChange={this.handlechange}
            required
            />
            <span>{this.state.error.userid}</span>
         </div>
         <br />
         <div>
         <lable>Title</lable>
         <input type="text" name="title" value={this.state.title}  Placeholder="Enter the Title" 
            onChange={this.handlechange}
            required />
            <span>{this.state.error.title}</span>
        </div>
        <br />
        <div>
        <lable>Body</lable>
        <input type="text"name="body" value={this.state.body}  Placeholder="Enter the body" 
            onChange={this.handlechange}
            required />
            <span>{this.state.error.body}</span>
        </div>
        <br />
        <div>
            <button type="submit">{this.state.id ? "Updata": "Create"}</button>
        </div>
        <br />
     </form>
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.state.Posts.map((post) =>{
            return(
        <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.UserId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td> <button onClick={()=>this.setState(...post)}>Edit</button>
                <button onClick={()=>this.deletePosts(post.id)}>Delete</button>
            </td>
        </tr>
           )})}
        
         </tbody>
    </table>
    </>
    }
}
export default Posts;