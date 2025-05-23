import React from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { useLocale } from "@docusaurus/theme-common";

const LocaleSwitcher = () => {
  const { locale, locales } = useLocale();
  const history = useHistory();
  const location = useLocation();

  const otherLocale = locales.find((loc) => loc !== locale);
  const switchTo = otherLocale ?? locale;

  const handleSwitch = () => {
    const pathnameParts = location.pathname.split("/");
    if (locales.includes(pathnameParts[1])) {
      pathnameParts[1] = switchTo;
    } else {
      pathnameParts.unshift(switchTo);
    }
    history.push(pathnameParts.join("/"));
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
    >
      {switchTo === "zh" ? "🇨🇳 中文" : "🇺🇸 English"}
    </button>
  );
};

export default LocaleSwitcher;
