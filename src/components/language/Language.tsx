import React, {useState} from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";


const Language = () => {

    const { t } = useTranslation();

    const handleChange = (event: any) => {
        let newLang = event.target.value;
        i18n.changeLanguage(newLang)
    }

    return (
        <div>
            <form className="language">
                <label className="lang-label">{ t("Select language") }</label>
                <select
                    className="lang-select"
                    onChange={handleChange}
                    name="language"
                    aria-label="language"
                >
                    <option
                        className="lang-option"
                        value="en"
                    >
                        EN
                    </option>
                    <option
                        className="lang-option"
                        value="lt"
                    >
                        LT
                    </option>
                </select>
            </form>
        </div>
    )
}

export default Language;
