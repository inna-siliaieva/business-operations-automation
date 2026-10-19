/* Multilingual landing page — Step 14.2 (navigation + hero).
   Remaining sections will be translated in the next stages. */
(() => {
  'use strict';

  const copy = {
    en: {
      nav: ['Services', 'Projects', 'Capabilities', 'Business Support', 'About', 'Contact'],
      eyebrow: 'Business Operations · Automation · Data · AI',
      heading: 'Business Operations & Automation Specialist',
      subheading: 'Streamlining everyday business processes through automation, data, and practical digital solutions.',
      description: 'I help small and growing businesses reduce repetitive manual work, organize operational processes, connect business tools, and turn data into clear, reliable workflows and reports.',
      primary: 'Explore Services',
      secondary: 'View Projects',
      title: 'Inna Siliaieva | Business Operations & Automation Specialist',
      meta: 'Business Operations, Workflow Automation, Data & Reporting, and AI-Powered Solutions for small and growing businesses.',
      languageLabel: 'Select language',
      navigationLabel: 'Main navigation',
      mobileNavigationLabel: 'Mobile navigation',
      toggleLabel: 'Toggle navigation'
    },
    uk: {
      nav: ['Послуги', 'Проєкти', 'Можливості', 'Підтримка бізнесу', 'Про мене', 'Контакти'],
      eyebrow: 'Бізнес-процеси · Автоматизація · Дані · ШІ',
      heading: 'Фахівчиня з бізнес-процесів та автоматизації',
      subheading: 'Оптимізація щоденних бізнес-процесів за допомогою автоматизації, даних і практичних цифрових рішень.',
      description: 'Я допомагаю малому бізнесу та компаніям, що розвиваються, скорочувати рутинну ручну роботу, упорядковувати операційні процеси, поєднувати бізнес-інструменти та перетворювати дані на зрозумілі й надійні робочі процеси та звіти.',
      primary: 'Переглянути послуги',
      secondary: 'Переглянути проєкти',
      title: 'Inna Siliaieva | Фахівчиня з бізнес-процесів та автоматизації',
      meta: 'Організація бізнес-процесів, автоматизація робочих процесів, обробка даних, звітність і рішення на основі ШІ для малого бізнесу.',
      languageLabel: 'Вибрати мову',
      navigationLabel: 'Головна навігація',
      mobileNavigationLabel: 'Мобільна навігація',
      toggleLabel: 'Відкрити або закрити меню'
    },
    de: {
      nav: ['Leistungen', 'Projekte', 'Kompetenzen', 'Laufende Betreuung', 'Über mich', 'Kontakt'],
      eyebrow: 'Geschäftsprozesse · Automatisierung · Daten · KI',
      heading: 'Spezialistin für Geschäftsprozesse und Automatisierung',
      subheading: 'Effizientere Geschäftsabläufe durch Automatisierung, Daten und praxistaugliche digitale Lösungen.',
      description: 'Ich unterstütze kleine und wachsende Unternehmen dabei, wiederkehrende manuelle Aufgaben zu reduzieren, Geschäftsprozesse zu strukturieren, ihre Tools zu verknüpfen und Daten in zuverlässige Abläufe und aussagekräftige Berichte zu verwandeln.',
      primary: 'Leistungen entdecken',
      secondary: 'Projekte ansehen',
      title: 'Inna Siliaieva | Spezialistin für Geschäftsprozesse und Automatisierung',
      meta: 'Geschäftsprozesse, Workflow-Automatisierung, Datenverarbeitung, Reporting und KI-gestützte Lösungen für kleine und wachsende Unternehmen.',
      languageLabel: 'Sprache auswählen',
      navigationLabel: 'Hauptnavigation',
      mobileNavigationLabel: 'Mobile Navigation',
      toggleLabel: 'Menü öffnen oder schließen'
    },
    ru: {
      nav: ['Услуги', 'Проекты', 'Компетенции', 'Поддержка бизнеса', 'Обо мне', 'Контакты'],
      eyebrow: 'Бизнес-процессы · Автоматизация · Данные · ИИ',
      heading: 'Специалист по бизнес-процессам и автоматизации',
      subheading: 'Оптимизация повседневных бизнес-процессов с помощью автоматизации, данных и практичных цифровых решений.',
      description: 'Я помогаю малым и растущим компаниям сокращать рутинную ручную работу, упорядочивать операционные процессы, связывать бизнес-инструменты и превращать данные в понятные, надёжные рабочие процессы и отчёты.',
      primary: 'Посмотреть услуги',
      secondary: 'Посмотреть проекты',
      title: 'Inna Siliaieva | Специалист по бизнес-процессам и автоматизации',
      meta: 'Организация бизнес-процессов, автоматизация, обработка данных, отчётность и решения на основе ИИ для малого бизнеса.',
      languageLabel: 'Выбрать язык',
      navigationLabel: 'Главная навигация',
      mobileNavigationLabel: 'Мобильная навигация',
      toggleLabel: 'Открыть или закрыть меню'
    }
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  function applyLanguage(language) {
    const lang = Object.hasOwn(copy, language) ? language : 'en';
    const t = copy[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta);

    document.querySelectorAll('.nav-links a, .mobile-nav-links a, .footer-links a').forEach(link => {
      const anchors = ['services', 'projects', 'capabilities', 'support', 'about', 'contact'];
      const position = anchors.indexOf((link.getAttribute('href') || '').replace(/^#/, ''));
      if (position !== -1) link.textContent = t.nav[position];
    });

    setText('.hero .eyebrow', t.eyebrow);
    setText('.hero h1', t.heading);
    setText('.hero h2', t.subheading);
    setText('.hero .hero-description', t.description);
    setText('.hero .button-primary', t.primary);
    setText('.hero .button-secondary', t.secondary);
    const select = document.querySelector('#language-select');
    if (select) {
      select.value = lang;
      select.setAttribute('aria-label', t.languageLabel);
    }
    const label = document.querySelector('label[for="language-select"]');
    if (label) label.textContent = t.languageLabel;
    document.querySelector('.nav-links')?.setAttribute('aria-label', t.navigationLabel);
    document.querySelector('.mobile-nav-links')?.setAttribute('aria-label', t.mobileNavigationLabel);
    document.querySelector('.mobile-menu-toggle')?.setAttribute('aria-label', t.toggleLabel);
    try { localStorage.setItem('landing-language', lang); } catch (_) { /* Private mode */ }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#language-select');
    if (!select) return;
    let saved = 'en';
    try { saved = localStorage.getItem('landing-language') || 'en'; } catch (_) { /* Private mode */ }
    applyLanguage(saved);
    select.addEventListener('change', () => applyLanguage(select.value));
  });
})();
