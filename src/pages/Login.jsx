import {Link} from "react-router-dom"

function LoginPage() {
  return (
      <div className={"w-full"}>
        <h2 className={"text-2xl text-center mb-6"}>Welcome back to Checkmate</h2>
        <div className={"w-full max-w-sm mx-auto"}>
          <form className={"form-container"}>
            <label>
              {"email"}
              <input type="email" required/>
            </label>
            <label>
              {"password"}
              <input type="password" required/>
            </label>
            <button type={"submit"}>login</button>
          </form>
          <div className={"text-center mt-4"}>
            <p>don't have an account? <Link className={"underline"} to={"/signup"}>create one here</Link></p>
          </div>
        </div>
      </div>
  )
}

export default LoginPage;