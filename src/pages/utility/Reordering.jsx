
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container} className=''>
            {order.map(({ color, label }) => (
  <motion.li
    key={label}
    layout
    transition={spring}
    style={{
      ...item,
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: 8,
      fontWeight: "bold",
    }}
  >
    {label}
  </motion.li>
))}
        </ul>
    )
}

const initialOrder = [
  { color: "#ff0088", label: "R" },
  { color: "#dd00ee", label: "A" },
  { color: "#9911ff", label: "C" },
  { color: "#0d63f8", label: "3" },
]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 50,
    stiffness: 200,
}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
    width: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item = {
    width: 10,
    height: 10,
    borderRadius: "10px",
}
