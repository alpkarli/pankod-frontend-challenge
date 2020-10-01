declare namespace IEntry {
    export interface IProps {
        title: string,
        description: string,
        programType: string,
        images: {
            'Poster Art': {
                url: string
                width?: number,
                height?: number
            }
        },
        releaseYear: number
    }

    export interface IHomeProps {
        title: string,
        images: {
            'Poster Art': {
                url: string
            }
        }
    }
}

export { IEntry };
