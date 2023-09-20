
let i = 4;
let myCss ={
  fontSize:48,
  color:"#f7f7"
}

function Header(prop) {
    return(
        <>
      test function component
      <h1 className='color-red'>React Basic Learning</h1>
      <p style={myCss}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate voluptatibus eius molestiae nihil. Quasi modi ipsum ducimus deleniti autem!</p>
      <p>{i == 2 ? "true":"false"}</p>
      
      <p>{prop.message}</p>
      
      </>
      
    )

}
export default Header