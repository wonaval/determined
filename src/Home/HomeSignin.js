const HomeSignin = () => {
  return (
    <div>
      <div>Sign In</div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="passwords">Password</label>
        <input type="password" name="password" />
      </form>
    </div>
  );
};

export default HomeSignin;
