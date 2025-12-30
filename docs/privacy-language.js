// Additional language handling for privacy policy page with lists
(function() {
    'use strict';

    // Override applyLanguage to handle lists
    const originalApplyLanguage = window.switchLanguage || function() {};

    document.addEventListener('DOMContentLoaded', function() {
        // Wait for main language.js to initialize
        setTimeout(function() {
            applyPrivacyLanguage();
        }, 100);
    });

    function applyPrivacyLanguage() {
        const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';
        const langData = translations[currentLang] || translations['ru'];

        // Handle all list elements
        const listElements = document.querySelectorAll('[data-i18n-list]');
        
        listElements.forEach(element => {
            const listKey = element.getAttribute('data-i18n-list');
            const index = parseInt(element.getAttribute('data-i18n-index'));
            
            if (langData[listKey] && langData[listKey][index]) {
                // Preserve HTML structure if it exists
                const innerHTML = element.innerHTML;
                const hasHTML = innerHTML.includes('<strong>') || innerHTML.includes('<em>') || innerHTML.includes('<code>');
                
                if (hasHTML) {
                    // Extract HTML tags and preserve them
                    const htmlMatch = innerHTML.match(/<[^>]+>/);
                    if (htmlMatch) {
                        const htmlTag = htmlMatch[0];
                        const textAfterTag = innerHTML.substring(innerHTML.indexOf('>') + 1);
                        const translation = langData[listKey][index];
                        
                        // Try to preserve the HTML structure
                        if (translation.includes(':')) {
                            const parts = translation.split(':');
                            element.innerHTML = htmlTag + parts[0] + ':</strong> ' + (parts[1] || '');
                        } else {
                            element.innerHTML = htmlTag + translation;
                        }
                    } else {
                        element.textContent = langData[listKey][index];
                    }
                } else {
                    element.textContent = langData[listKey][index];
                }
            }
        });
    }

    // Re-apply when language changes
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(applyPrivacyLanguage, 50);
        });
    });
})();

