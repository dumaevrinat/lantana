import { atom, AtomOptions, RecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface PersistedAtomOptions<T> extends AtomOptions<T> { }

export function persistedAtom<T>(options: PersistedAtomOptions<T>): RecoilState<T> {
    return atom<T>({
        ...options,
        effects_UNSTABLE: [...(options.effects_UNSTABLE ? options.effects_UNSTABLE : []), persistAtom]
    })
}
