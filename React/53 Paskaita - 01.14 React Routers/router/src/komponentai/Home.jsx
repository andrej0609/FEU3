const Home = () => {
  const niceTextStyle = {
    color: "green",
    fontSize: "2rem",
    fontWeight: "bold",
  };
  return (
    <>
      <h1 style={niceTextStyle} >Home</h1>
      <p style={{textTransform:'uppercase', color: 'red'}} >Welcome to the home page</p>
    </>
  );
}

export default Home;