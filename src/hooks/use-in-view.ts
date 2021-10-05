import { RefObject, useEffect, useRef, useState } from 'react'

export function useInView<T extends Element>(options: IntersectionObserverInit): [RefObject<T>, boolean] {
    const ref = useRef<T>(null)
    
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const callback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries

        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const target = ref.current
        const observer = new IntersectionObserver(callback, options)

        if (target) {
            observer.observe(target)
        }

        return () => {
            if (target) {
                observer.disconnect()
            }
        }
    }, [ref, options])

    return [ref, isVisible]
}
