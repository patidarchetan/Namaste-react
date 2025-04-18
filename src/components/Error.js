import { useRouteError } from "react-router-dom";

const Errorpage = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Page not found</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Errorpage;