function StudySession() {
  return (
      <div className={"container h-full flex flex-col justify-center items-center"}>
        <h1 className={"text-4xl font-bold mb-10"}>study session</h1>
        <div className={"grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-y-12 md:gap-x-6 lg:gap-x-12"}>
          <section className={"study-card"}>
            <h3>focus mode</h3>
            <ul className={"text-center flex flex-col gap-y-2"}>
              <li className={"focus-mode-minutes"}>5 minutes</li>
              <li className={"focus-mode-minutes"}>10 minutes</li>
              <li className={"focus-mode-minutes"}>30 minutes</li>
              <li className={"focus-mode-minutes"}>60 minutes</li>
            </ul>
            <label className={"w-24 mx-auto flex"}>
              <input type="number" className={"w-full bg-transparent"} max={99} placeholder={"1"}/>
              <span className={"opacity-50"}>hours</span>
            </label>
            <label>
              <span className={"opacity-50"}>reason</span>
              <input type="text" className={"ml-4 bg-transparent outline-none"} placeholder={"study for exam"}/>
            </label>
            <button className={"btn-green"}>start timer!</button>
          </section>
          <section className={"study-card"}>
            <h3>to-do list</h3>
          </section>
          <section className={"study-card"}>
            <h3>exam reviewer</h3>
            <p className={"text-center text-lg"}>paste notes</p>
            <textarea className={"review-textfield"} name="review-notes" id="review-notes"></textarea>
            <button className={"btn-yellow"}>generate quiz</button>
          </section>
        </div>
      </div>
  )
}

export default StudySession;