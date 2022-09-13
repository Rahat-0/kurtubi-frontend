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
        document.addEventListener('click', eventHandler)
        return () => {
            document.removeEventListener('click', eventHandler)
        }
    }, [itemRef])


    return trigger
}

export default useOutsideToHide