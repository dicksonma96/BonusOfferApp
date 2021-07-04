import {useState} from "react"

function useCollapse(bool = true) {
    const [collapse, setCollapse] = useState(bool)

    function toggleCollapse() {
      setCollapse(prevState => !prevState)
    }

    return {collapse, toggleCollapse}
}

export default useCollapse
