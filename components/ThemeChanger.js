// ./components/ThemeChanger.js
import { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  //   const { theme, setTheme } = useTheme();
  const [theme, setTheme] = useState();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const changeHandler = (e) => {
    setTheme(e.target.value);
    document.documentElement.setAttribute('data-theme', e.target.value);
    document.documentElement.style.colorScheme = e.target.value;
  };
  if (!mounted) return null;

  return (
    <div className="self-center">
      <label htmlFor="theme-select" className="sr-only mr-2">
        Choose theme:
      </label>
      <select
        name="theme"
        id="theme-select"
        className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
        onChange={changeHandler}
        // onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        <option value="">Select Theme</option>
        {themes.map((t) => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeChanger;
