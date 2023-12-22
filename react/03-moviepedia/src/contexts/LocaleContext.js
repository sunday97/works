import { createContext, useState } from "react";

// useContext : 일종의 전역변수

// Context가 제공할 기본값을 받는다.
const LocaleContext = createContext();

function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

// export default LocaleContext;
export default LocaleProvider;
