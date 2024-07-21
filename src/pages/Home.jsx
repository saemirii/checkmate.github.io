import image from "../assets/checkbox.png";

function Home() {
  return (
      <div className={"main-title"}>
        <h1>checkmate!</h1>
        <div className={"flex justify-center gap-x-2 items-center mt-2 md:mt-4 lg:mt-6"}>
          <img className={"w-6 h-6"} src={image} alt="checkbox"/>
          <p>[ a minimalistic task manager ]</p>
        </div>
      </div>
  )
}

export default Home;