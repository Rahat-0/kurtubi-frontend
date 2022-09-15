import { useEffect, useState } from 'react'

const useOutsideToHide = (itemRef, initialValue) => {
    const [trigger, setTrigger] = useState({ trigger: initialValue || false })

    useEffect(() => {
        const eventHandler = (event) => {
            try {
                if (!itemRef.current.contains(event.target))
                    setTrigger({ trigger: false })
            } catch (error) {
                return error.message
            }
        }
        document.addEventListener('mousedown', eventHandler)
        return () => {
            document.removeEventListener('mousedown', eventHandler)
        }
    }, [itemRef])


    return trigger
}

export default useOutsideToHide