import { createContext } from 'react';
import {initUserAPI} from './Modules/user/initUserAPI';
import { User } from './Modules/user/databaseTypes';

type AppContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    cleanUser: () => void;
    userAPI: ReturnType<typeof initUserAPI>;
};

export const AppContext = createContext<AppContextType>({
    user: null,
    setUser: () => {},
    cleanUser: () => {},
    userAPI: initUserAPI(fetch),
});
