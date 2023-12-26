import { createContext, useContext, useState } from "react";

// useContext : 일종의 전역변수개념
// props 드릴링을 하지 않기 위해 사용한다.
// Context가 제공할 기본값을 받는다.

const LocaleContext = createContext();

export function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    // LocaleContext.provider안에 있는 컴포넌트 에서만 사용할 수 있다. 그러니까 app을 감싼거다.
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

// 커스텀훅 만들기
// 리엑드에 등록이 된다 => import/export가 필요 없다.
// 지금 제작하는 이유?
// 매번 useContext와 LocaleContext 값을 가지고 사용하는 것이 번거롭기 떄문에
// 이것들을 대신할 수 있는 Hook을 만든다.
// useLocale Hook은 lacale 값을 전달해주고, useSetLocale이라는 Hook은 setLocale 함수를 전달해주도록 한다.
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }

  return context.locale;
}
export function useSetLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }

  return context.setLocale;
}

// export default LocaleContext;
// export default LocaleProvider; //default를 붙이면 하나밖에 export하지 못한다.
