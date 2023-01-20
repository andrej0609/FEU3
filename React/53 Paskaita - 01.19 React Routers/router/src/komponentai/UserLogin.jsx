const UserLogin = () => {
  return (
    <>
      <div className="Login">
        <h1>User Login</h1>
        <form>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>

        </form>
      </div>
    </>
  );
}

export default UserLogin;