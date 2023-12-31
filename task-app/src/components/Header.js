
import Logo from '../assets/panda.png'
import {useState,useEffect} from "react"

export const Header = () => {
  
  const [theme,setTheme] = useState('light')  

  useEffect(() => {
  localStorage.setItem("theme",JSON.stringify(theme));
  document.documentElement.removeAttribute("class");  
  document.documentElement.classList.add(theme);
  },[theme]) 


  return (
<header>
<div className="logo">
    <img src = {Logo} alt = "Taskmate Logo" />
    <span>Timours Taskmaker</span>
</div>
<div className="themeSelector">

                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
                <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
                <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
           
</div>
</header>

  )
}

