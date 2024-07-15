import {useState} from "react";
import {format} from "date-fns";

function Reminders(props) {
  const date = new Date();

  return (
      <div className={`reminders-container ${props.visible? "translate-x-0": "translate-x-full"}`}>
        <section className={"text-center"}>
          <h3 className={"text-2xl font-bold"}>reminders</h3>
          <p>{format(date, "PP")}</p>
        </section>
        <section>
          <p className={"text-lg font-bold mb-2"}>symbols</p>
          <ul className={"flex flex-col md:flex-row md:gap-x-4"}>
            <li className={"flex items-center gap-x-2"}>
              <span className={"w-4 h-4 rounded-full bg-rose-400"}></span>
              <span>due today</span>
            </li>
            <li className={"flex items-center gap-x-2"}>
              <span className={"w-4 h-4 rounded-full bg-amber-400"}></span>
              <span>due soon</span>
            </li>
            <li className={"flex items-center gap-x-2"}>
              <span className={"w-4 h-4 rounded-full bg-emerald-400"}></span>
              <span>due later</span>
            </li>
          </ul>
        </section>
        <section>
          <p className={"text-lg font-bold mb-2"}>settings</p>
          <ul className={"flex flex-col md:flex-row md:gap-x-4"}>
            <li>
              <label className={"flex items-center gap-x-2"}>
                <input type="checkbox"/>
                {"notify you"}
              </label>
            </li>
            <li>
              <label className={"flex items-center gap-x-2"}>
                <input type="checkbox"/>
                {"mark as done"}
              </label>
            </li>
          </ul>
        </section>
      </div>
  )
}

export default Reminders