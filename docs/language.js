// Language switcher functionality
(function() {
    'use strict';

    // Get saved language or default to Russian
    let currentLang = localStorage.getItem('language') || 'ru';
    
    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', function() {
        applyLanguage(currentLang);
        setupLanguageSwitcher();
    });

    // Apply language to all elements with data-i18n attribute
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        const htmlRoot = document.getElementById('html-root');
        
        if (htmlRoot) {
            htmlRoot.setAttribute('lang', lang);
        }

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Skip list items - they are handled separately
            if (element.hasAttribute('data-i18n-list')) {
                return;
            }
            
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translation;
                } else if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                } else if (element.hasAttribute('title')) {
                    element.setAttribute('title', translation);
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Handle list items
        const listItems = document.querySelectorAll('[data-i18n-list]');
        listItems.forEach(item => {
            const listKey = item.getAttribute('data-i18n-list');
            const index = parseInt(item.getAttribute('data-i18n-index'));
            
            if (translations[lang] && translations[lang][listKey] && translations[lang][listKey][index] !== undefined) {
                const translation = translations[lang][listKey][index];
                // Preserve HTML if it exists
                const hasHTML = item.innerHTML.includes('<strong>') || item.innerHTML.includes('<em>') || item.innerHTML.includes('<code>');
                
                if (hasHTML && translation.includes(':')) {
                    // Try to preserve structure
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

        // Update page title
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][titleKey]) {
                if (titleKey === 'privacyTitle') {
                    document.title = translations[lang][titleKey] + ' - Export to Excel';
                } else {
                    document.title = translations[lang][titleKey] + ' - Google Workspace Add-ons';
                }
            }
        }

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && translations[lang] && translations[lang]['heroDescription']) {
            metaDescription.setAttribute('content', translations[lang]['heroDescription']);
        }

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save language preference
        localStorage.setItem('language', lang);
        currentLang = lang;
    }

    // Setup language switcher buttons
    function setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                applyLanguage(lang);
            });
        });
    }

    // Export function for use in other scripts
    window.switchLanguage = function(lang) {
        applyLanguage(lang);
    };

    // Export current language
    window.getCurrentLanguage = function() {
        return currentLang;
    };
})();

