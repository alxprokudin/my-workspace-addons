// Additional language handling for privacy policy page
// This file ensures lists are updated when language changes
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Wait for main language.js to initialize, then re-apply lists
        setTimeout(function() {
            if (window.switchLanguage) {
                // Re-apply language to ensure lists are updated
                const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';
                window.switchLanguage(currentLang);
            }
        }, 150);
    });

    // Re-apply when language changes
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-btn')) {
            setTimeout(function() {
                const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';
                // Trigger re-application of lists
                const listItems = document.querySelectorAll('[data-i18n-list]');
                listItems.forEach(item => {
                    const listKey = item.getAttribute('data-i18n-list');
                    const index = parseInt(item.getAttribute('data-i18n-index'));
                    const lang = currentLang;
                    
                    if (translations[lang] && translations[lang][listKey] && translations[lang][listKey][index] !== undefined) {
                        const translation = translations[lang][listKey][index];
                        // Preserve HTML structure if it exists
                        const hasHTML = item.innerHTML.includes('<strong>') || item.innerHTML.includes('<code>');
                        
                        if (hasHTML && translation.includes(':')) {
                            const parts = translation.split(':');
                            const htmlMatch = item.innerHTML.match(/<[^>]+>/);
                            if (htmlMatch && parts.length > 1) {
                                item.innerHTML = htmlMatch[0] + parts[0] + ':</strong> ' + parts.slice(1).join(':');
                            } else {
                                item.textContent = translation;
                            }
                        } else {
                            item.textContent = translation;
                        }
                    }
                });
            }, 100);
        }
    });
})();

