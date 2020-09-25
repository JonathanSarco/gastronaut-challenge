import React from 'react';
import LanguageToggle from '../../LanguageToggle';
import { Toggle } from './css';
import { useTranslation } from 'react-i18next';

function CustomToggle (props) {
    const { i18n } = useTranslation();
    
    const setLanguage = (id) => {
        i18n.changeLanguage(id);
    }

    return (
        <Toggle>
            <LanguageToggle language={i18n.language} setlanguage={setLanguage}/>
        </Toggle>
    );
}

export default CustomToggle;