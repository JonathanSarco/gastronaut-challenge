import React, { useEffect } from 'react';
import LanguageToggle from '../../UI/LanguageToggle/index';
import { ToggleContainer } from './css';
import { useTranslation } from 'react-i18next';

function Toggle() {
    const { i18n } = useTranslation();
    
    const setLanguage = (id) => {
        i18n.changeLanguage(id);
    }

    return (
        <ToggleContainer>
            <LanguageToggle language={i18n.language.split('-')[0]} setlanguage={setLanguage} />
        </ToggleContainer>
    );
}

export default Toggle;