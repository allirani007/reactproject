import { useEffect, useState } from "react";
import{Link,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <ul>
      <li><Link to="/recipe-list">RecipeList</Link></li>
      <li><Link to="/">Home</Link></li>
      </ul>
      <Switch>
        <Route path="/recipe-list"><RecipeList /></Route>
        <Route path="/"><Welcome/> </Route>
      </Switch>
   
    
    </div>
  );
}
function Welcome(){
  const msg="Welcome to recipe app 🍩🎂🍨";
  return(
    <div>
      <h1>{msg}</h1>
    </div>
  );
}

function RecipeList(){
//   const listrecipe=[{
//     name:" Veg Biryani",
//     pic:"https://i.ytimg.com/vi/JqP4wSWsYr4/maxresdefault.jpg"
//   },
//   {
//     name:" Butter Naan",
//     pic:"https://simmertoslimmer.com/wp-content/uploads/2020/02/Naan-Bread.jpg",
//   },
//   {
//     name:"Veg curry",
//     pic:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/vegetablecurry_80763_16x9.jpg",
//   },
//   {
//     name: "gopi 65",
//     pic:"https://www.boldsky.com/img/2021/07/img-20210728-wa0016-1627476057.jpg",
//   },
// ]
const[listrecipe,setlistrecipe]=useState([]);
useEffect(()=>{fetch("https://60f821399cdca0001745522d.mockapi.io/Recipe")
.then(data=>data.json())
.then(recipes=>setlistrecipe(recipes))
},[]);
  const msg="Awesome to recipe List🍗🥠";
  return(
    <div>
      <h1>{msg}</h1>
      <div className="recipe-list-Container">
       {listrecipe.map(rrr=> <Recipe recipe={rrr}/>)} 
      </div>
      </div>
  );
}
function Recipe({recipe}){
    return(
    <div className="recipe-container">
      <img src={recipe.pic} alt={recipe.name} className="recipe_picture" />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  )

}

export default App;
