import { Photo, PhotoDetails, PhotoSchema, PhotoDetailsSchema } from './types';
import { convertToType } from '../convertToType';

const BASE_URL = 'http://localhost:3015/api';

export const initPhotoAPI = (fetchAPI: typeof fetch) => {
    const searchPhotos = async (query: string): Promise<Photo[]> => {
        const allPhotos: Photo[] = [];
        const page = 1;

        const response = await fetchAPI(`${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=80&page=${page}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();

        const validatedPhotos: Photo[] = data.photos.map((photo: unknown) =>
            convertToType(photo, PhotoSchema)
        );

        allPhotos.push(...validatedPhotos);
        return allPhotos;
    };

    const getPhotoById = async (id: number): Promise<PhotoDetails> => {
        const response = await fetchAPI(`${BASE_URL}/photo/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch photo: ${response.statusText}`);
        }

        const photo = await response.json();
        return convertToType(photo, PhotoDetailsSchema);
    };

    return {
        searchPhotos,
        getPhotoById,
    };
};
