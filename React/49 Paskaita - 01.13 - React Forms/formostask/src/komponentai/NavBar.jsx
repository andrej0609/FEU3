import React, { useState } from "react";
import LogOn from "./Singin";
import User from "./User";

function NavBar(props) {
  const [arPrisijunges, setArPrisijunges] = useState(false);

  const handlePrisijungti = () => setArPrisijunges(true);
  const handleAtsijungti = () => {
    setArPrisijunges(false);
    props.disconnect();
  };

  return (
    <div className="navbar">
      <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/fiverr-logo-1.png" alt="logo" />
      {!arPrisijunges && <LogOn prijungti={handlePrisijungti} />}
      {arPrisijunges && <User atsijungti={handleAtsijungti} markedCount={props.markedCount} />}
    </div>
  );
}

export default NavBar;
