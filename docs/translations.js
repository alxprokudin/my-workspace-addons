// Translations for the website
const translations = {
    ru: {
        // Header
        siteTitle: "Мои проекты",
        navProjects: "Проекты",
        navPrivacy: "Политика конфиденциальности",
        navHome: "Главная",
        
        // Hero section
        heroTitle: "Дополнения для Google Workspace",
        heroDescription: "Коллекция полезных дополнений для Google Sheets, Docs и других сервисов Google Workspace",
        
        // Projects section
        projectsTitle: "Мои проекты",
        excelExportTitle: "Экспорт в Excel",
        excelExportDescription: "Экспортируйте активный лист Google Таблицы в формат Excel (.xlsx) и сохраняйте в выбранную папку Google Drive одним кликом.",
        newProjectTitle: "Новый проект",
        newProjectDescription: "Скоро здесь появится новый проект...",
        installFromMarketplace: "Установить из Marketplace",
        privacyPolicy: "Политика конфиденциальности",
        termsOfService: "Условия использования",
        
        // Contact section
        contactTitle: "Связаться со мной",
        contactDescription: "Есть вопросы или предложения? Свяжитесь со мной!",
        
        // Footer
        footerCopyright: "© 2024 Мои проекты. Все права защищены.",
        
        // Privacy Policy Page
        privacyTitle: "Политика конфиденциальности дополнения \"Экспорт в Excel\"",
        lastUpdated: "Последнее обновление:",
        privacyLastUpdated: "1 января 2024",
        
        // Privacy Policy Sections
        privacyIntro: "Дополнение \"Экспорт в Excel\" (\"мы\", \"нас\", \"наше\") уважает вашу конфиденциальность и обязуется защищать ваши личные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию при использовании нашего дополнения для Google Sheets.",
        
        section1Title: "1. Введение",
        section2Title: "2. Информация, которую мы собираем",
        section2_1Title: "2.1 Данные, которые мы НЕ собираем",
        section2_1Text: "Наше дополнение НЕ собирает, НЕ хранит и НЕ передает следующие данные:",
        section2_1List: [
            "Содержимое ваших таблиц",
            "Личные данные пользователей",
            "Email-адреса",
            "Любые другие персональные данные"
        ],
        section2_2Title: "2.2 Данные, к которым мы получаем доступ",
        section2_2Text: "Для работы дополнения нам требуется доступ к следующим данным (которые обрабатываются локально в вашем браузере и Google Apps Script):",
        section2_2List: [
            "Активный лист таблицы: Только для экспорта в формат Excel",
            "Папки Google Drive: Только для сохранения экспортированного файла в выбранную вами папку",
            "OAuth токен: Для авторизации доступа к Google Drive API"
        ],
        section2_2Important: "Важно: Все операции выполняются в вашем аккаунте Google, мы не имеем доступа к вашим данным.",
        
        section3Title: "3. Как мы используем информацию",
        section3Text: "Мы используем доступ к данным исключительно для:",
        section3List: [
            "Экспорта активного листа в формат Excel (.xlsx)",
            "Сохранения экспортированного файла в выбранную вами папку Google Drive",
            "Обеспечения работы интерфейса выбора папки"
        ],
        section3NotUsed: "Мы НЕ используем ваши данные для:",
        section3NotUsedList: [
            "Рекламы",
            "Анализа поведения",
            "Передачи третьим лицам",
            "Любых других целей, кроме указанных выше"
        ],
        
        section4Title: "4. Хранение данных",
        section4List: [
            "Мы НЕ храним ваши данные на наших серверах",
            "Все операции выполняются через Google Apps Script в вашем аккаунте Google",
            "Экспортированные файлы сохраняются в вашем Google Drive, к которому у нас нет постоянного доступа"
        ],
        
        section5Title: "5. Передача данных третьим лицам",
        section5Text: "Мы НЕ передаем ваши данные третьим лицам. Дополнение использует только официальные API Google:",
        section5List: [
            "Google Sheets API",
            "Google Drive API",
            "Google Picker API"
        ],
        section5Text2: "Все взаимодействие происходит напрямую между вашим браузером и сервисами Google.",
        
        section6Title: "6. Безопасность",
        section6Text: "Мы принимаем разумные меры для защиты ваших данных:",
        section6List: [
            "Используем официальные OAuth 2.0 протоколы Google",
            "Запрашиваем только минимально необходимые разрешения (scopes)",
            "Не храним данные на внешних серверах",
            "Используем безопасные соединения (HTTPS)"
        ],
        
        section7Title: "7. Ваши права",
        section7Text: "Вы имеете право:",
        section7List: [
            "Отозвать доступ к дополнению в любой момент через настройки Google аккаунта",
            "Удалить дополнение из ваших Google Sheets",
            "Запросить информацию о том, какие данные обрабатываются (хотя мы не храним данные)"
        ],
        
        section8Title: "8. Разрешения (OAuth Scopes)",
        section8Text: "Дополнение запрашивает следующие разрешения:",
        section8_1Title: "1. https://www.googleapis.com/auth/spreadsheets.currentonly",
        section8_1List: [
            "Доступ только к текущей открытой таблице",
            "Используется для экспорта активного листа"
        ],
        section8_2Title: "2. https://www.googleapis.com/auth/drive.file",
        section8_2List: [
            "Доступ к файлам, созданным приложением",
            "Используется для сохранения экспортированного файла"
        ],
        section8_3Title: "3. https://www.googleapis.com/auth/script.external_request",
        section8_3List: [
            "Выполнение внешних HTTP-запросов",
            "Используется для экспорта через Google Sheets API"
        ],
        
        section9Title: "9. Изменения в политике конфиденциальности",
        section9Text: "Мы можем обновлять эту политику конфиденциальности время от времени. О существенных изменениях мы уведомим вас через:",
        section9List: [
            "Обновление дополнения в Google Workspace Marketplace",
            "Уведомление в интерфейсе дополнения (если применимо)"
        ],
        section9Text2: "Рекомендуем периодически просматривать эту страницу для получения актуальной информации.",
        
        section10Title: "10. Контактная информация",
        section10Text: "Если у вас есть вопросы о этой политике конфиденциальности или о том, как мы обрабатываем ваши данные, пожалуйста, свяжитесь с нами:",
        section10Email: "Email:",
        section10Website: "Веб-сайт:",
        section10Homepage: "Главная страница",
        
        section11Title: "11. Согласие",
        section11Text: "Используя это дополнение, вы соглашаетесь с этой политикой конфиденциальности. Если вы не согласны с этой политикой, пожалуйста, не используйте дополнение.",
        
        section12Title: "Дополнительная информация",
        section12GDPRTitle: "Для пользователей из ЕС (GDPR)",
        section12GDPRText: "В соответствии с Общим регламентом по защите данных (GDPR), мы хотим подчеркнуть:",
        section12GDPRList: [
            "Мы не обрабатываем персональные данные в смысле GDPR",
            "Все операции выполняются локально в вашем аккаунте Google",
            "Мы не являемся контроллером данных - Google является контроллером данных для ваших Google Sheets"
        ],
        section12CCPATitle: "Для пользователей из Калифорнии (CCPA)",
        section12CCPAText: "В соответствии с Законом Калифорнии о конфиденциальности потребителей (CCPA):",
        section12CCPAList: [
            "Мы не продаем ваши данные",
            "Мы не собираем персональную информацию в коммерческих целях",
            "Все операции выполняются в рамках функциональности дополнения"
        ],
        
        privacyEffectiveDate: "Дата вступления в силу:",
        privacyLastUpdatedDate: "Дата последнего обновления:",
        privacyEffectiveDateValue: "1 января 2024",
        privacyLastUpdatedDateValue: "1 января 2024",
        
        // Terms of Service Page
        navTerms: "Условия использования",
        termsTitle: "Условия использования дополнения \"Экспорт в Excel\"",
        termsLastUpdated: "1 января 2024",
        
        // Terms of Service Sections
        termsSection1Title: "1. Принятие условий",
        termsSection1Text: "Используя дополнение \"Экспорт в Excel\" для Google Sheets (\"Дополнение\"), вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с этими условиями, пожалуйста, не используйте Дополнение.",
        
        termsSection2Title: "2. Описание сервиса",
        termsSection2Text: "Дополнение \"Экспорт в Excel\" позволяет пользователям экспортировать активный лист Google Таблицы в формат Microsoft Excel (.xlsx) и сохранять его в выбранную папку Google Drive.",
        
        termsSection3Title: "3. Использование дополнения",
        termsSection3_1Title: "3.1 Разрешенное использование",
        termsSection3_1Text: "Вы можете использовать Дополнение для:",
        termsSection3_1List: [
            "Экспорта листов Google Таблиц в формат Excel",
            "Сохранения экспортированных файлов в ваши папки Google Drive",
            "Любых законных деловых или личных целей"
        ],
        termsSection3_2Title: "3.2 Запрещенное использование",
        termsSection3_2Text: "Вы не можете использовать Дополнение для:",
        termsSection3_2List: [
            "Нарушения законов или прав третьих лиц",
            "Передачи вредоносного кода или вирусов",
            "Попыток взлома или нарушения работы сервиса",
            "Любых действий, которые могут нанести вред другим пользователям"
        ],
        
        termsSection4Title: "4. Интеллектуальная собственность",
        termsSection4Text: "Дополнение и все связанные материалы защищены законами об интеллектуальной собственности. Все права на Дополнение принадлежат разработчику. Вы не можете копировать, модифицировать, распространять или создавать производные работы на основе Дополнения без явного письменного разрешения.",
        
        termsSection5Title: "5. Отказ от гарантий",
        termsSection5Text: "Дополнение предоставляется \"как есть\" без каких-либо гарантий, явных или подразумеваемых. Разработчик не гарантирует, что Дополнение будет работать без ошибок или прерываний, или что оно будет соответствовать вашим конкретным требованиям.",
        
        termsSection6Title: "6. Ограничение ответственности",
        termsSection6Text: "В максимальной степени, разрешенной законом, разработчик не несет ответственности за любые прямые, косвенные, случайные, особые или последующие убытки, возникающие в результате использования или невозможности использования Дополнения.",
        
        termsSection7Title: "7. Изменения в условиях",
        termsSection7Text: "Разработчик оставляет за собой право изменять настоящие Условия использования в любое время. Изменения вступают в силу с момента публикации обновленной версии на этой странице. Продолжение использования Дополнения после внесения изменений означает ваше согласие с новыми условиями.",
        
        termsSection8Title: "8. Прекращение использования",
        termsSection8Text: "Разработчик оставляет за собой право прекратить или приостановить доступ к Дополнению в любое время без предварительного уведомления, если вы нарушаете настоящие Условия использования.",
        
        termsSection9Title: "9. Контактная информация",
        termsSection9Text: "Если у вас есть вопросы относительно настоящих Условий использования, пожалуйста, свяжитесь с нами:",
        termsSection9Email: "Email:",
        termsSection9Website: "Веб-сайт:",
        
        termsSection10Title: "10. Применимое право",
        termsSection10Text: "Настоящие Условия использования регулируются и толкуются в соответствии с законами [Ваша страна/юрисдикция]. Любые споры, возникающие из или связанные с настоящими Условиями, подлежат исключительной юрисдикции судов [Ваша страна/юрисдикция]."
    },
    en: {
        // Header
        siteTitle: "My Projects",
        navProjects: "Projects",
        navPrivacy: "Privacy Policy",
        navHome: "Home",
        
        // Hero section
        heroTitle: "Google Workspace Add-ons",
        heroDescription: "A collection of useful add-ons for Google Sheets, Docs, and other Google Workspace services",
        
        // Projects section
        projectsTitle: "My Projects",
        excelExportTitle: "Export to Excel",
        excelExportDescription: "Export an active Google Sheet to Excel (.xlsx) format and save it to a selected Google Drive folder with one click.",
        newProjectTitle: "New Project",
        newProjectDescription: "A new project will appear here soon...",
        installFromMarketplace: "Install from Marketplace",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        
        // Contact section
        contactTitle: "Contact Me",
        contactDescription: "Have questions or suggestions? Get in touch!",
        
        // Footer
        footerCopyright: "© 2024 My Projects. All rights reserved.",
        
        // Privacy Policy Page
        privacyTitle: "Privacy Policy for \"Export to Excel\" Add-on",
        lastUpdated: "Last updated:",
        privacyLastUpdated: "January 1, 2024",
        
        // Privacy Policy Sections
        privacyIntro: "The \"Export to Excel\" add-on (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect information when using our add-on for Google Sheets.",
        
        section1Title: "1. Introduction",
        section2Title: "2. Information We Collect",
        section2_1Title: "2.1 Data We Do NOT Collect",
        section2_1Text: "Our add-on does NOT collect, store, or transmit the following data:",
        section2_1List: [
            "Content of your spreadsheets",
            "User personal data",
            "Email addresses",
            "Any other personal data"
        ],
        section2_2Title: "2.2 Data We Access",
        section2_2Text: "For the add-on to function, we require access to the following data (which is processed locally in your browser and Google Apps Script):",
        section2_2List: [
            "Active sheet: Only for exporting to Excel format",
            "Google Drive folders: Only for saving the exported file to a folder you select",
            "OAuth token: For authorizing access to Google Drive API"
        ],
        section2_2Important: "Important: All operations are performed in your Google account, we do not have access to your data.",
        
        section3Title: "3. How We Use Information",
        section3Text: "We use data access exclusively for:",
        section3List: [
            "Exporting the active sheet to Excel (.xlsx) format",
            "Saving the exported file to a Google Drive folder you select",
            "Providing the folder selection interface"
        ],
        section3NotUsed: "We do NOT use your data for:",
        section3NotUsedList: [
            "Advertising",
            "Behavior analysis",
            "Sharing with third parties",
            "Any other purposes beyond those listed above"
        ],
        
        section4Title: "4. Data Storage",
        section4List: [
            "We do NOT store your data on our servers",
            "All operations are performed through Google Apps Script in your Google account",
            "Exported files are saved to your Google Drive, to which we do not have permanent access"
        ],
        
        section5Title: "5. Sharing Data with Third Parties",
        section5Text: "We do NOT share your data with third parties. The add-on uses only official Google APIs:",
        section5List: [
            "Google Sheets API",
            "Google Drive API",
            "Google Picker API"
        ],
        section5Text2: "All interaction occurs directly between your browser and Google services.",
        
        section6Title: "6. Security",
        section6Text: "We take reasonable measures to protect your data:",
        section6List: [
            "We use official Google OAuth 2.0 protocols",
            "We request only the minimum necessary permissions (scopes)",
            "We do not store data on external servers",
            "We use secure connections (HTTPS)"
        ],
        
        section7Title: "7. Your Rights",
        section7Text: "You have the right to:",
        section7List: [
            "Revoke access to the add-on at any time through your Google account settings",
            "Remove the add-on from your Google Sheets",
            "Request information about what data is processed (although we do not store data)"
        ],
        
        section8Title: "8. Permissions (OAuth Scopes)",
        section8Text: "The add-on requests the following permissions:",
        section8_1Title: "1. https://www.googleapis.com/auth/spreadsheets.currentonly",
        section8_1List: [
            "Access only to the currently open spreadsheet",
            "Used for exporting the active sheet"
        ],
        section8_2Title: "2. https://www.googleapis.com/auth/drive.file",
        section8_2List: [
            "Access to files created by the application",
            "Used for saving the exported file"
        ],
        section8_3Title: "3. https://www.googleapis.com/auth/script.external_request",
        section8_3List: [
            "Execution of external HTTP requests",
            "Used for exporting through Google Sheets API"
        ],
        
        section9Title: "9. Changes to Privacy Policy",
        section9Text: "We may update this privacy policy from time to time. We will notify you of significant changes through:",
        section9List: [
            "Updating the add-on in Google Workspace Marketplace",
            "Notification in the add-on interface (if applicable)"
        ],
        section9Text2: "We recommend periodically reviewing this page for the latest information.",
        
        section10Title: "10. Contact Information",
        section10Text: "If you have questions about this privacy policy or how we process your data, please contact us:",
        section10Email: "Email:",
        section10Website: "Website:",
        section10Homepage: "Homepage",
        
        section11Title: "11. Consent",
        section11Text: "By using this add-on, you agree to this privacy policy. If you do not agree with this policy, please do not use the add-on.",
        
        section12Title: "Additional Information",
        section12GDPRTitle: "For EU Users (GDPR)",
        section12GDPRText: "In accordance with the General Data Protection Regulation (GDPR), we would like to emphasize:",
        section12GDPRList: [
            "We do not process personal data within the meaning of GDPR",
            "All operations are performed locally in your Google account",
            "We are not a data controller - Google is the data controller for your Google Sheets"
        ],
        section12CCPATitle: "For California Users (CCPA)",
        section12CCPAText: "In accordance with the California Consumer Privacy Act (CCPA):",
        section12CCPAList: [
            "We do not sell your data",
            "We do not collect personal information for commercial purposes",
            "All operations are performed within the functionality of the add-on"
        ],
        
        privacyEffectiveDate: "Effective date:",
        privacyLastUpdatedDate: "Last updated:",
        privacyEffectiveDateValue: "January 1, 2024",
        privacyLastUpdatedDateValue: "January 1, 2024",
        
        // Terms of Service Page
        navTerms: "Terms of Service",
        termsTitle: "Terms of Service for \"Export to Excel\" Add-on",
        termsLastUpdated: "January 1, 2024",
        
        // Terms of Service Sections
        termsSection1Title: "1. Acceptance of Terms",
        termsSection1Text: "By using the \"Export to Excel\" add-on for Google Sheets (\"Add-on\"), you agree to these Terms of Service. If you do not agree with these terms, please do not use the Add-on.",
        
        termsSection2Title: "2. Service Description",
        termsSection2Text: "The \"Export to Excel\" add-on allows users to export an active Google Sheet to Microsoft Excel (.xlsx) format and save it to a selected Google Drive folder.",
        
        termsSection3Title: "3. Use of the Add-on",
        termsSection3_1Title: "3.1 Permitted Use",
        termsSection3_1Text: "You may use the Add-on for:",
        termsSection3_1List: [
            "Exporting Google Sheets to Excel format",
            "Saving exported files to your Google Drive folders",
            "Any lawful business or personal purposes"
        ],
        termsSection3_2Title: "3.2 Prohibited Use",
        termsSection3_2Text: "You may not use the Add-on for:",
        termsSection3_2List: [
            "Violating laws or third-party rights",
            "Transmitting malicious code or viruses",
            "Attempting to hack or disrupt the service",
            "Any actions that may harm other users"
        ],
        
        termsSection4Title: "4. Intellectual Property",
        termsSection4Text: "The Add-on and all related materials are protected by intellectual property laws. All rights to the Add-on belong to the developer. You may not copy, modify, distribute, or create derivative works based on the Add-on without explicit written permission.",
        
        termsSection5Title: "5. Disclaimer of Warranties",
        termsSection5Text: "The Add-on is provided \"as is\" without any warranties, express or implied. The developer does not guarantee that the Add-on will work without errors or interruptions, or that it will meet your specific requirements.",
        
        termsSection6Title: "6. Limitation of Liability",
        termsSection6Text: "To the maximum extent permitted by law, the developer is not liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Add-on.",
        
        termsSection7Title: "7. Changes to Terms",
        termsSection7Text: "The developer reserves the right to change these Terms of Service at any time. Changes take effect upon publication of the updated version on this page. Continued use of the Add-on after changes are made means you agree to the new terms.",
        
        termsSection8Title: "8. Termination",
        termsSection8Text: "The developer reserves the right to terminate or suspend access to the Add-on at any time without prior notice if you violate these Terms of Service.",
        
        termsSection9Title: "9. Contact Information",
        termsSection9Text: "If you have questions regarding these Terms of Service, please contact us:",
        termsSection9Email: "Email:",
        termsSection9Website: "Website:",
        
        termsSection10Title: "10. Applicable Law",
        termsSection10Text: "These Terms of Service are governed by and construed in accordance with the laws of [Your country/jurisdiction]. Any disputes arising from or related to these Terms are subject to the exclusive jurisdiction of the courts of [Your country/jurisdiction]."
    }
};

