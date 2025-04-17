import { initUserAPI } from '../initUserAPI';
import { User, Collection } from '../databaseTypes';

describe('initUserAPI', () => {
    const mockToken = 'mockToken';

    const mockUser: User = {
        _id: '123',
        email: 'test@example.com',
        collections: [],
    };

    const mockCollection: Collection = {
        _id: '12345',
        name: 'My Collection',
        description: 'Description',
        photosId: [],
    };

    beforeEach(() => {
        localStorage.clear();
    });

    describe('login', () => {
        it('should login and return user', async () => {
            const fetchMock = jest.fn();

            fetchMock.mockImplementationOnce(() =>
                new Response(JSON.stringify({ token: mockToken }), {
                    status: 200,
                })
            );

            fetchMock.mockImplementationOnce(() =>
                new Response(JSON.stringify(mockUser), {
                    status: 200,
                })
            );

            const api = initUserAPI(fetchMock);
            const result = await api.login('test@example.com', 'password');

            expect(result).toEqual(mockUser);
            expect(localStorage.getItem('token')).toBe(mockToken);
        });
    });

    describe('getUserInfo', () => {
        it('should return user info', async () => {
            const fetchMock = jest.fn().mockImplementation(() =>
                new Response(JSON.stringify(mockUser), {
                    status: 200,
                })
            );

            const api = initUserAPI(fetchMock);
            const user = await api.getUserInfo();

            expect(user).toEqual(mockUser);
        });
    });

    describe('createCollection', () => {
        it('should return created collection', async () => {
            const fetchMock = jest.fn().mockImplementation(() =>
                new Response(JSON.stringify(mockCollection), {
                    status: 200,
                })
            );

            const api = initUserAPI(fetchMock);
            const collection = await api.createCollection('My Collection', 'Description');

            expect(collection).toEqual(mockCollection);
        });
    });

    describe('addPhotoToCollection', () => {
        it('should add photo to collection', async () => {
            const fetchMock = jest.fn().mockImplementation(() =>
                new Response(null, {
                    status: 200
                })
            );

            const api = initUserAPI(fetchMock);
            await expect(api.addPhotoToCollection('name1', 'desc1')).resolves.toBeUndefined();
        });
    });

    describe('token save/clean', () => {
        it('should save, restore and clean token', () => {
            const api = initUserAPI(fetch);

            api.saveToken('exampleToken');
            expect(api.restoreToken()).toBe('exampleToken');

            api.cleanToken();
            expect(api.restoreToken()).toBeNull();
        });
    });
});
