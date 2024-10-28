# WeatherApp
WeatherApp est une application développée à l'aide du Framework Angular 14.<br>
Cette application a pour objectif de servir de Bac à sable pour exercice, kata et coding dojos lorsque le contexte  s'y prête.

## Installation
```shell
npm install
```

## Katas

### A - Tests Unitaires Objets & Services
1. **Tests Unitaires Objet**<br>
   Rajouter à la classe `TownWeather` la methode `temperatureRange()` pour calculer l'amplitude de température (en degrés) avec test unitaire et afficher le champ dans la page de détails<br>
   [Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/8ffeab179513ed440bcd8c8e10dd423f67fb0e3f)
2. **Tests Unitaires Service**<br>
   Crée le service `TrendingService` : Selection d'une ville random pour construction du lien d'actualité (texte + url)
   1. Créer le model `Trending` contenant les champs `label` & `url`
   2. Créer le service `TrendingService`
   3. Rajouter au service `TrendingService` la methode `retrieveTrending()` avec test unitaire : qui choisit aléatoirement une ville (<nom_ville>) parmi la liste des villes retournées par l'api et génère le Trending suivant :
      ```json
         {
           "label" : "Visiter <nom_ville>",
           "url" : "https://www.google.com/search?q=<nom_ville>"
         }
      ```
   4. Afficher le résultat du trending le dans le template  `weather.component.html`<br>
   [Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/40fa66cd1da8d4fba446ed364485f75b3420b05b)

### B - Tests Unitaires Components (DOM & Observables)
1. **Test du dom avec `TestingLibrary`** : [Documentation](https://testing-library.com/docs/)<br>
   Rajouter de nouveaux cas de test dans le fichier `src/app/components/town-selector/town-selector.component.spec.ts` pour :
   1. Vérifier avec la méthode `const listOfTownsContainer = screen.getByRole('list', ...)` que la page html contient une liste nommée `Available Towns`<br>
   [Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/dfcb8465d4a24b9e56736877664fdb266570e248)
   2. Vérifier avec la méthode `getAllByRole(listOfTownsContainer, 'listitem')` que la liste des villes restituées est conforme au paramètre `globalWeather` du composant (penser à bien initialiser cette attribut dans le test)<br>
   [Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/6b0cbf04468de4f6a972611d82cb1f711beae941)
   <br>
   <br>
2. **Mock d'un observable** : Le but est de vérifier la bonne initialisation du composant `WeatherComponent` en mockant la méthode `weatherService.getCurrentWeather()`.<br>
    Ecrire des tests unitaires vérifiant la valeur du signal `WeatherComponent.availableTownWeather` en prennant soin de gérer les différents cas possibles.</br>
    **Exemple de mock** :
    ``` javascript
    it('<nom du test à changer>', () => {
        ...
        // Création du mock    
        const getCurrentWeatherMock = jest.fn(() =>
          of(MOCK_TONWS_WEATHER)
        );
   
        const weatherService = TestBed.inject(WeatherService);
        // Remplacement de la vraie méthode par le mock
        weatherService['getCurrentWeather'] = getCurrentWeatherMock;
   
        // Initialisation du composant
        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
   
        // Déclenche la détection des changements pour appliquer ces changements au component 
        fixture.detectChanges();
        
        expect(component).toBeTruthy();
        // Vérification de l'appel au mock
        expect(getCurrentWeatherMock).toHaveBeenCalledTimes(1);
   
        // Autres vérifications
        ...
    });
    ```
   [Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/5734f7fb5df8223a638220535baa9de1b3a88260)
   <br>

### C - Tests E2E avec UUV
Voir [Kata E2E UUV](https://github.com/e2e-test-quest/kata-e2e-uuv/)

### D - Tests Store : NGXS Store
L'objectif ici est de faire porter le mécanisme de sélection d'une ville par l'outil de gestion de store [NGXS Store](https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1.25,format=auto/https%3A%2F%2F490253082-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-L9CoGJCq3UCfKJ7RCUg%252Favatar.png%3Fgeneration%3D1522797881064033%26alt%3Dmedia)
1. Créer un store avec la commande suivante : 
    ```shell
    ng generate @ngxs/store:store --path stores --name weather
    ```
2. Migrer la Selection d'une ville vers le store :
   1. Ajouter la propriété `selectedTownWeather` dans le state `weather.state.ts` pour porter l'information de la ville sélectionnée
   2. Déclarer l'action de selection d'une ville `selectTown` dans le fichier `weather.action.ts`
   3. Implémenter l'action dans le fichier `weather.state.ts`
   4. Rajouter les tests unitaires pour l'action `WeatherState.selectTown` dans le fichier `weather.state.spec.ts` et les modifications nécessaires pour que tous les tests unitaires s'exécutent sans erreur
   5. Mettre à jour la configuration `app.config.ts` et les composants `weather` et `town-selector` pour utiliser le selecteur `WeatherState.getSelectedTownWeather` et l'action `WeatherState.selectTown`.<br>
[Voir la solution](https://github.com/e2e-test-quest/weather-app/commit/eafa53db211ebc4a805126f96a74a4ffa0a00657)
