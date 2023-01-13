import UserInfo from "./UserInfo";

function NavBar(props) {
  return (
    <div className="navbar">
       <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/fiverr-logo-1.png" alt="logo" />
      <UserInfo markedCount={props.markedCount} />
    </div>
  );
}

export default NavBar;