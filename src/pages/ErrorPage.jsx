function ErrorPage() {
  return (
      <div className={"w-full min-h-dvh bg-white flex justify-center items-center"}>
        <div className={"text-center"}>
          <h1 className={"text-6xl"}>404</h1>
          <p>whoops...it seems this page does not exist!</p>
        </div>
      </div>
  )
}

export default ErrorPage;