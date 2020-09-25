import React from 'react';
import LanguageToggle from '../../LanguageToggle';
import { ToggleContainer } from './css';
import { useTranslation } from 'react-i18next';

function Toggle() {
    const { i18n } = useTranslation();
    
    const setLanguage = (id) => {
        i18n.changeLanguage(id);
    }

    return (
        <ToggleContainer>
            <LanguageToggle language={i18n.language.split(0,1)[0]} setlanguage={setLanguage} />
        </ToggleContainer>
    );
}

export default Toggle;