
export type CardProps = {
    id: number;
    img: string;
    name: string;
    isFavorite: (idCharacter: number) => boolean | undefined;
}
