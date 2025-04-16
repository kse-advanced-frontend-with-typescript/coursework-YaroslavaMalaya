import { initPhotoAPI} from '../index';
import { Photo, PhotoDetails } from '../types';

describe('Photos API', () => {
    const mockPhoto: Photo = {
        id: 1,
        src: {
            large: 'https://example.com/photo.jpg',
        },
        alt: 'Example photo',
    };

    const mockPhotoDetails: PhotoDetails = {
        ...mockPhoto,
        photographer: 'Kylie Janner',
        photographer_url: 'https://example.com/photographer',
    };

    describe('searchPhotos', () => {
        it('should return an array of photos on success', async () => {
            const fetchMock = jest.fn().mockImplementation(() =>
                new Response(JSON.stringify({ photos: [mockPhoto] }), {
                    status: 200,
                })
            );

            const api = initPhotoAPI(fetchMock);

            const result = await api.searchPhotos('example');
            expect(result).toEqual([mockPhoto]);
        });
    });

    describe('getPhotoById', () => {
        it('should return photo details', async () => {
            const fetchMock = jest.fn().mockImplementation(() =>
                new Response(JSON.stringify(mockPhotoDetails), {
                    status: 200,
                })
            );

            const api = initPhotoAPI(fetchMock);

            const result = await api.getPhotoById(1);
            expect(result).toEqual(mockPhotoDetails);
        });
    });
});
