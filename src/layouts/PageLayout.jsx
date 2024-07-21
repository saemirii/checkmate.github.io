import Menu from "../components/Menu";
import ThemeToggle from "../components/ThemeToggle";
import Reminders from "../components/Reminders";
import {Outlet} from 'react-router-dom'
import {useState} from "react";

function PageLayout() {
  const [isRemindersOpen, setIsRemindersOpen] = useState(false);
  return (
      <div className={"min-h-dvh grid overflow-x-hidden p-4 relative z-0"}>
        <Menu isOpen={isRemindersOpen} setIsOpen={setIsRemindersOpen} />
        <ThemeToggle/>
        <Reminders visible={isRemindersOpen} />
        <div className={"w-full h-full flex justify-center items-center"}>
          <Outlet />
        </div>
      </div>
  )
}

export default PageLayout;