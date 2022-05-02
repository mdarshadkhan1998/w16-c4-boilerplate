import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, display:"flex", justifyContent:"space-around" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
        <Link to="/" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Home</Link>
        <Link to="/about" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>About</Link>
        <Link to="/products" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Products</Link>
        <Link to="/products/men" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Men</Link>
        <Link to="/products/women" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Women</Link>
        <Link to="/products/kids" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Kids</Link>
        <Link to="/products/homedecor" style={{color:"white", textDecoration:"none", fontWeight:"600"}}>Home Decor</Link>
        
    </nav>
  );
};
