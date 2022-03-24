import React from "react";

// function Msg({ name, pic, about,Rating,Rating1 }) {
//   const styles={
//     color:Rating1>8.5 ? "purple" :"red",
//     }
//   const [count, setcount] = useState(0);
//   // const name = "Allirani🤷‍♂️✔✔💖";
//   //console.log(Props, name);
//   return (
//     <div className="col-4 mb-3">
//        <img className="user-profile" src={pic} alt="Movie name" />
//         <div>
//           <h6>Movie Title: {name}</h6>
//           <p>{about}<br></br><span style={styles} className="rr">{Rating}</span></p>
//           <p style={styles} className="Movie-rating">Rating:{Rating1}</p>
//           <a href="#" className="btn btn-primary" onClick={() => setcount(count + 1)}>
//             Home
//           </a>
//           <Counter />
//         </div>
//       </div>
//       );
// }
// function Counter() {
//   const [like, setLike] = useState(0);
//   const [dislike, setDislike] = useState(0);
//   return (
//     <div className="fff">
//       <button onClick={() => setLike(like + 1)}>👍{like}</button>
//       <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
//     </div>
//   );
// }
// export default function App() {
//           return (
//         <div classNameName="App">
//           <Addcolor />
//         </div>
//       );
//     }
// 
function Welcome(Props) {
  // const name = "Allirani🤷‍♂️✔✔💖";
  //console.log(Props, name);
  return (
    <div>
      <img classNameName="user-profile" src={Props.profile} alt="hgj" />
      <h1> Hai {Props.name} </h1>
    </div>
  );
}
