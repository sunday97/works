function LocaleSelect({ onchange, locale }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(locale);
    onchange(e.target.value);
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
