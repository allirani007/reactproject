import "./App.css";
import React, { useState } from "react";

export default function Movie() {
  const user = [
    {
      name: "Wall leaf",
      pic:
        "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      about:
        "A wall is a structure and a surface that defines an area; carries a load; provides security, shelter, or soundproofing; or, is decorative. There are many kinds of walls, including: Walls in buildings that form a fundamental part of the superstructure or separate interior rooms, sometimes for fire safety.",
        rating:9
    },
    {
      name: "Beach with living people",
      pic:
        "https://thumbs.dreamstime.com/b/chennai-tamilnadu-india-january-port-148314321.jpg",
      about:
        "Beaches are usually made of sand, tiny grains of rocks and minerals that have been worn down by constant pounding by wind and waves. ... A beach is a narrow, gently sloping strip of land that lies along the edge of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and seashell fragments cover beaches",
        rating:8.2
    },
    {
      name: "Mountain beauty",
      pic:
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      about:
        "மலை என்பது ஒரு குறித்த நிலப்பகுதியில் அதன் சுற்றாடலுக்கு மேலே உயர்ந்து காணப்படும் ஒரு பெரிய நிலவடிவம் ஆகும். இதற்கு ஒரு உச்சி இருக்கும். மலை, குன்று ஆகிய சொற்கள் சில வேளைகளில் ஒன்றுக்கு ஒன்று மாற்றீடாகப் பயன்பட்டாலும், மலை, குன்றைவிடக் குறைவான உயரம் உள்ளதாகவும், கூடிய சரிவு கொண்டதாகவும் இருக்கும். மலை தொடர்பான கல்வித்துறை மலையியல் எனப்படுகிறது.",
        rating:6.3
    },
    {
      name: "Ganga River",
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Varanasiganga.jpg",
      about:
        " இந்தியாவின் முக்கிய ஆறு . கங்கை இந்தியாவின் தேசிய நதி ஆகும்.[1] இமய மலையில் உத்தராகண்டம் மாநிலத்திலுள்ள கங்கோத்ரியில் தொடங்கும் பாகிரதி நதியானது தேவப்பிரயாக் எனுமிடத்தில் அலக்நந்தா ஆற்றுடன் கலந்து கங்கையாகிறது. ",
        rating:7.5
    },
    {
      name: "Flower vally",
      pic:
        "https://www.tripsavvy.com/thmb/Yi6-RXP8agPL-MPywjytCZz8ES4=/2126x1196/smart/filters:no_upscale()/125986545-56a3bf3e3df78cf7727f0188.jpg",
      about:
        "மலர் அல்லது பூ என்பது மலரும் தாவரங்களில் காணப்படும் இனப்பெருக்க அமைப்பு ஆகும். மலர்கள், தாவரங்களின் இனப்பெருக்க உறுப்புகளைக் கொண்டுள்ளன. மலர்களின் பணி விதைகளை உருவாக்குவது ஆகும். உயர்நிலைத் தாவரங்களுக்கு விதைகளே அடுத்த தலைமுறையை உருவாக்குகின்றன",
        rating:9.2
    }
  ];
  return (
    <div className="movie-list">
      {user.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} about={usr.about} rating={usr.rating} />
      ))}

      {/* <Welcome  profile="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="alli" />
      <Welcome name="rani" profile="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

      <Welcome name="suresh" /> */}
    </div>
  );
}
// export default function App() {
//   const names = ["uma", "mani", "sudha", "suresh", "hema"];
//   return (
//     <div className="App">
//       {names.map((nm) => (
//         <Msg name={nm} />
//       ))}
//     </div>
//   );
// }

function Msg({ name, pic, about,rating }) {
  // const name = "Allirani🤷‍♂️✔✔💖";
  //console.log(Props, name);
  return (
    <div className="movie-container">
    <img className="movie-img" src={pic} alt={name} />
      <div className="movie-spec">
      <h1 className="movie-name"> {name} </h1>
      <p className="rating">⭐{rating}</p>
      </div>
      <p className="movie-summary">{about}</p>
      <Counter />
      </div>
  );
}
function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
      <div className="fff">
        <button onClick={() => setLike(like + 1)}>👍{like}</button>
        <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
                        
      </div>
    );
  }



// function Welcome(Props) {
//   // const name = "Allirani🤷‍♂️✔✔💖";
//   //console.log(Props, name);
//   return (
//     <div>
//       <img className="user-profile" src={Props.profile} alt="hgj" />
//       <h1> Hai {Props.name} </h1>
//     </div>
//   );
// }
// function Welcome1(Props) {
//   // const name = "Allirani🤷‍♂️✔✔💖";
//   //console.log(Props, name);
//   return (
//     <div>
//       <h1> Hai {Props.name} </h1>
//       <p /> Alli Rani, also known as Alli arasi, is a legendary Tamil queen of
//       the Sangam period, who is thought to have ruled the whole western and
//       northern coast of Sri Lanka from her capital Kudiramalai. According to
//       folklore, her fort, Allirani fort, is located in Mannar, Sri Lanka.
//     </div>
//   );
// }
