export interface IImageLinks{
    thumbnail: string;
}

export interface IVolumeInfo{
    title: string;
    categories: string;
    authors: string;
    ImageLinks: IImageLinks
}

export interface IBook {
    id: string;
    volumeInfo: IVolumeInfo
}