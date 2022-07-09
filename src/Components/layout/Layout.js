import Navbar from "./Navbar";
import  "./Layout.css"


const Layout = (props) => {
    return ( 
        <div>
    <Navbar/>
      <main className="main">{props.children}</main>
    </div>
     );
}
 
export default Layout;