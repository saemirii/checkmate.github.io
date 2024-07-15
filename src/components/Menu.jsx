import {HiSave, HiLockOpen, HiStar, HiCalendar, HiClock, HiMenu, HiX} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Menu(props) {
  const [open, setOpen] = useState(false);

  function toggleReminders() {
    if(props.isOpen) {
      props.setIsOpen(false)
    } else {
      props.setIsOpen(true)
    }
  }

  return (
      <div className={"menu-container"}>
        <button className={"text-3xl md:hidden"} onClick={() => setOpen(!open)}>
          {
            open ? (<HiX/>) : (<HiMenu/>)
          }
        </button>
        <ul className={`menu ${open ? "menu-visible" : "menu-hidden"}`}>
          <li>
            {/* Not sure what to do with this button - for now, just using it as a home button*/}
            <Link to={"/"}>
              <HiSave/>
              <span>save progress</span>
            </Link>
          </li>
          <li>
            <a href={"https://github.com/saemirii/checkmate"}>
              <HiStar/>
              <span>star this repo!</span>
            </a>
          </li>
          <li>
            <Link to={"/login"}>
              <HiLockOpen/>
              <span>check-in</span>
            </Link>
          </li>
          <li>
            <Link to={"/study-session"}>
              <HiClock/>
              <span>study session</span>
            </Link>
          </li>
          <li>
            <button onClick={toggleReminders}>
              <HiCalendar/>
              <span>reminders</span>
            </button>
          </li>
        </ul>
      </div>
  );
}

export default Menu;