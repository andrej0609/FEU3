const UserRegistration = () => {
  return (
    <>
      <div className="register">
        <h1>User Registration</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default UserRegistration;