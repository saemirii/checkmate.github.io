import {Link} from "react-router-dom"

function SignupPage() {
  return (
      <div className={"w-full"}>
        <h2 className={"text-2xl text-center mb-6"}>Welcome to Checkmate</h2>
        <div className={"w-full max-w-sm mx-auto"}>
          <form className={"form-container"}>
            <label>
              {"username"}
              <input type="text" required/>
            </label>
            <label>
              {"email"}
              <input type="email" required/>
            </label>
            <label>
              {"password"}
              <input type="password" required/>
            </label>
            <label>
              {"confirm password"}
              <input type="password" required/>
            </label>
            <button type={"submit"}>create account</button>
          </form>
          <div className={"text-center mt-4"}>
            <p>already have an account? <Link className={"underline"} to={"/login"}>login here</Link></p>
          </div>
        </div>
      </div>

  )
}

export default SignupPage;