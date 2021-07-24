import { brewer } from 'chroma-js'

export const colorBrewerGroups = {
    'diverging': [
        'Spectral',
        'RdYlGn',
        'RdBu',
        'PiYG',
        'PRGn',
        'RdYlBu',
        'BrBG',
        'RdGy',
        'PuOr'
    ] as Array<keyof typeof brewer>,
    'qualitative': [
        'Set2',
        'Accent',
        'Set1',
        'Set3',
        'Dark2',
        'Paired',
        'Pastel2',
        'Pastel1',
    ] as Array<keyof typeof brewer>,
    'sequential': [
        'OrRd',
        'PuBu',
        'BuPu',
        'Oranges',
        'BuGn',
        'YlOrBr',
        'YlGn',
        'Reds',
        'RdPu',
        'Greens',
        'YlGnBu',
        'Purples',
        'GnBu',
        'Greys',
        'YlOrRd',
        'PuRd',
        'Blues',
        'PuBuGn',
    ] as Array<keyof typeof brewer>
}