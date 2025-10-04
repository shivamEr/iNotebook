import { useState } from 'react'
import modeContext from './modeContext'

const ModeState = (props) => {
    const [mode, setMode] = useState("light")

    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "white";
            // showAlert("Light Mode has been Enabled", "success");
        }
        else {
            setMode("dark");
            document.body.style.backgroundColor = '#042743';
            // showAlert("Dark Mode has been Enabled", "success");
        }
    }
    return (
        <modeContext.Provider value={{mode, toggleMode}}>
            {props.children}
        </modeContext.Provider>
    )
}
export default ModeState;