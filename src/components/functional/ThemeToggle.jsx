function ThemeToggle({ theme, onToggle }) {
  //task 5: show next theme
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${nextTheme} theme`}> 
      Switch to {nextTheme} theme
    </button>
  );
}
export default ThemeToggle;
