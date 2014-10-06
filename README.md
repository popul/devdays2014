devdays2014
===========

- Les applications web partout, sur tous type d'appareils (pc, tablette, smartphone)
- Les outils de tests automatisés se démocratisent
    - Selenium pour les applications web
    - Selendroid, UiAutomator pour Android
    - UIAutomation pour IOS
- Les services de tests sur le net fleurissent 
    - Browserstack (http://www.browserstack.com/)
    - Sauce Labs (https://saucelabs.com/selenium/)

- Tests d'interface web
    - Utilisation de selenium pour piloter le navigateur. 
        - Ce qu'il est possible de faire aujourd'hui avec selenium
        - Ce qui l'est moins
        - Exemple d'un scénario sélénium
    - Actuellement à base d'assertions classique. 
        - Liste des types d'assertions (equal, notequal, etc ...)
        - Exemple, test de la largeur d'un élément 

Naissance d'Eagle

- Présentation du contexte de la messagerie pro
    - Présentation fonctionnelle de l'application (mail, contact, agenda)
    - Interface responsive pour pc, tablette et mobile
    - Nombre de navigateurs supportés :
        - Tablettes et téléphones IOS 6+
        - Téléphones et tablettes Android 4.1+ (Android et chrome)
        - Windows Phone 8+ (IE 10 & 11)
        - Navigateurs PC/Mac: IE 10+, Chrome, Firefox, Safari
    - Enorme charge de qualification chez IVA
    - Besoin d'automatiser des tests

- Notre choix: Automatiser les tests de non regréssion, Pourquoi ? 
    - Redondants à chaque livraison
    - Peu attrayant et motivants pour IVA
    - Probabilité d'erreurs plus importante
    - Plus facile de créer un test à postériori

- Exigences
    - Les tests doivent être reproductibles et fiables
    - Les charges d’écriture et de maintenance des tests doivent être raisonnables
    - L’exécution des tests doit être intégrée (Hudson/Jenkins)
        - Exécution périodique et à la demande des tests
        - Consultation des rapports de tests
        - Notification par mail

- Contexte / Difficultés rencontréest
    - Difficultés à piloter directement les tablettes et mobiles de manière fiable et automatisée
    - Difficultés à maitriser l’ensemble des composants de NDI (interface, PIM, ME, Wassup, SelfCare, etc …)
    - Difficultés à écrire des tests fiables et qui détectent de vrais erreurs
    - Difficultés à maintenir les tests

- Intérêts
    - Diminuer le coût des tests manuels sans plus value humaine
    - Améliorer la qualité de l’application livrée à la qualification 
    - Se rapprocher des logiques DevOps
    - Rentabiliser très rapidement les tests automatisés grâce au nombre important de browsers supportés (plus de 20)



- Workflow
    - Lancement des tests
    - Prise des images de référence
    - Sauvegarde des images de référence sur une gestion de configuration
    - (optionel) Enregistrement des réponses aux ressources externes (XHR ou autre)
    - (optionel) Sauvegarde des réponses en gestion de configuration

    - Récupération des tests, des images de référence et des r
    - Lancement des tests
    - Prise de screenshots et comparaisons avec les images de références
