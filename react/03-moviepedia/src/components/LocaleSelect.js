import { useLocale, useSetLocale } from "../contexts/LocaleContext";
import "./LocaleSelect.css";

function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(locale);
    // onchange(e.target.value);
    setLocale(e.target.value);
  };

  return (
    <select className="LocaleSelect" value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
