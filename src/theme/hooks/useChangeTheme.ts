import { setThemeInStorage } from '../helpers/setThemeInStorage';
import { Themes } from '../theme.types';
import { useAppDispatch, useAppSelector } from '@/hooks/state/useStateTypes';
import { changeThemeA } from '@/store/reducers/theme/themeSlice';

/**
 * Custom hook for change the current theme
 * using context to has more control
 */
export const useChangeTheme = () => {
    const userTheme = useAppSelector(state => state.theme.value);
    const dispatch = useAppDispatch();

    const changeTheme = (isDark: boolean) => {
        const newTheme = isDark ? Themes.dark : Themes.light;
        setThemeInStorage(newTheme);
        dispatch(changeThemeA(newTheme));
    };

    return {
        isDarkTheme: userTheme === Themes.dark,
        changeTheme
    };
};
