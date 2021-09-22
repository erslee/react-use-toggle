import { useState } from "react"

const useToggle = (initValue = false) => {
  const [toggle, setToggle] = useState(initValue);
  const toggler = () => setToggle(state => !state);
  return [toggle, toggler];
}

export default useToggle;