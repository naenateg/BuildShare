export default function Login() {
  function handleSubmit(e) {
    e.preventDefault(); // stop the browser's default "reload the page" behavior
    alert('Login will work once we build the backend!');
  }

  return (
    <div className="form">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <p><button className="button" type="submit">Log In</button></p>
      </form>
    </div>
  );
}