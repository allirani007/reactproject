import { BrowserRouter} from "react-router-dom";

// import Navigation from "./components/navigation";

import Rout100 from "./components/route1";
function App()
{
    return(
        <BrowserRouter>
        {/* <Navigation /> */}
        <Rout100 />
        </BrowserRouter>
    );

}
export default App;
