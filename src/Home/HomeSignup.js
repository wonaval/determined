const HomeSignup = () => {
  return (
    <div>
      <div>Sign up</div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="passwords">Password</label>
        <input type="password" name="password" />
      </form>
    </div>
  );
};

export default HomeSignup;
