import { convertToType } from '../convertToType';
import { User, UserSchema, Collection, CollectionSchema } from './databaseTypes';

export const initUserAPI = (fetchAPI: typeof fetch) => {
    const TOKEN_KEY = 'token';
    const BASE_URL = 'http://localhost:3016';

    const login = async (email: string, password: string): Promise<User> => {
        const res = await fetchAPI(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) throw new Error((await res.json()).error);
        const data = await res.json();
        saveToken(data.token);
        return getUserInfo(data.token);
    };

    const getUserInfo = async (token?: string): Promise<User> => {
        const authToken = token || restoreToken();

        const res = await fetchAPI(`${BASE_URL}/user/collections`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
        });

        if (!res.ok) throw new Error((await res.json()).error);
        const user = await res.json();
        return convertToType(user, UserSchema);
    };

    const createCollection = async (name: string, description: string): Promise<Collection> => {
        const authToken = restoreToken();

        const res = await fetchAPI(`${BASE_URL}/user/add-collections`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
        });

        if (!res.ok) throw new Error((await res.json()).error);
        const collection = await res.json();
        return convertToType(collection, CollectionSchema);
    };

    const addPhotoToCollection = async (collectionId: string, photoId: string) => {
        const authToken = restoreToken();

        const res = await fetchAPI(`${BASE_URL}/user/add-collections/${collectionId}/photo`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ photoId }),
        });

        if (!res.ok) throw new Error((await res.json()).error);
    };

    const saveToken = (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
    };

    const restoreToken = (): string | null => {
        return localStorage.getItem(TOKEN_KEY);
    };

    const cleanToken = () => {
        localStorage.removeItem(TOKEN_KEY);
    };

    return {
        login,
        getUserInfo,
        createCollection,
        addPhotoToCollection,
        restoreToken,
        saveToken,
        cleanToken,
    };
};
