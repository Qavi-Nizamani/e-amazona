import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../../store/ui';

const themes = [{ name: 'Light' }, { name: 'Dark' }];

const ThemeChanger = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const changeHandler = (e) => {
    dispatch(uiActions.updateTheme(e.target.value));
    document.documentElement.setAttribute('data-theme', e.target.value);
    document.documentElement.style.colorScheme = e.target.value;
    localStorage.setItem('theme', e.target.value);
  };

  return (
    <div className="self-center">
      <label htmlFor="theme-select" className="sr-only">
        Choose theme:
      </label>
      <select
        name="theme"
        id="theme-select"
        className="bg-white rounded-md text-gray-800 border-gray-800 border py-1 px-3"
        onChange={changeHandler}
        // onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        {themes.map((t) => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(ThemeChanger);
