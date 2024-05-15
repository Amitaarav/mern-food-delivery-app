
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <div className ="border-b-2 border-b-violet-500 ppy-6">
            <div className = "container mx-auto flex justify-between items-center">
                <Link to ="/" className ="text-3x1 font-bold tracking-tight text-orange-500">
                    MishEats.com
                </Link>
            </div>
        </div>
    )

}

export default Header;