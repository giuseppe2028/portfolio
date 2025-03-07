import React, { useState, useEffect } from "react";
import "@fontsource/noto-sans-arabic";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-sans-kr";
import "@fontsource/open-sans";
import "./DropDown.css"
import {useTranslation} from "react-i18next";
const locales = [
    "en-GB","de-DE", "es-ES", "it-IT",
];

const getFlagSrc = (countryCode) => {
    return /^[A-Z]{2}$/.test(countryCode)
        ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
        : "";
};

const Dropdown = () => {
    const {i18n} = useTranslation();
    const [selectedLocale, setSelectedLocale] = useState(locales[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const setLocale = (locale) => {
        setSelectedLocale(locale);
        i18n.changeLanguage(locale.split('-')[0]); // Call i18next.changeLanguage with the language code
        setDropdownOpen(false);
    };

    const browserLang = new Intl.Locale(navigator.language).language;

    useEffect(() => {
        const matchedLocale = locales.find((locale) => {
            return new Intl.Locale(locale).language === browserLang;
        });
        if (matchedLocale) {
            setLocale(matchedLocale);
        }
    }, [browserLang]);

    const intlLocale = new Intl.Locale(selectedLocale);
    const langName = new Intl.DisplayNames([selectedLocale], { type: "language" }).of(intlLocale.language);

    const otherLocales = locales.filter((loc) => loc !== selectedLocale);

    return (
        <div className="dropdown" tabIndex="0">
            <button
                className="dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <img src={getFlagSrc(intlLocale.region)} alt={selectedLocale} />
                {langName}
                <span className="arrow-down" />
            </button>

            {dropdownOpen && (
                <ul className="dropdown-content">
                    {otherLocales.map((otherLocale) => {
                        const otherIntlLocale = new Intl.Locale(otherLocale);
                        const otherLangName = new Intl.DisplayNames([otherLocale], {
                            type: "language",
                        }).of(otherIntlLocale.language);

                        return (
                            <li
                                key={otherLocale}
                                onClick={() => setLocale(otherLocale)}
                            >
                                {otherLangName}
                                <img src={getFlagSrc(otherIntlLocale.region)} alt={otherLocale} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;