# WeatherApp
WeatherApp est une application développée à l'aide du Framework Angular 14.<br>
Cette application a pour objectif de servir de Bac à sable pour exercice, kata et coding dojos lorsque le contexte  s'y prête.

## Installation
```shell
yarn install
```
ou

```shell
npm install
```

## Katas

### A - Tests Unitaires Objets & Services
1. **Tests Unitaires Objet**<br>
   Rajouter à la classe `TownWeather` la methode `temperatureRange()` pour calculer l'amplitude de température (en degrés) avec test unitaire et afficher le champ dans la page de détails
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
   4. Afficher le résultat du trending le dans le template  `weather.component.html`

### B - Tests Unitaires Components (DOM & Observables)
1. **Test du dom avec `TestingLibrary`** : ![Documentation](https://testing-library.com/docs/).
   1. Rajouter un nouveau cas de test dans le fichier `src/app/components/town-selector/town-selector.component.spec.ts`
   2. Vérifier avec la méthode `const listOfTownsContainer = screen.getByRole('list')` que le dom contient bien un élément de type list
   3. Vérifier avec la méthode `screen.getAllByRole('listitem', listOfTownsContainer)` la liste des villes restituée est conforme au paramètre `globalWeather` du composant (penser à bien initialiser cette attribut dans le test) 
   <br>
   <br>
2. **Mock d'un observable** : Le but est de tester la méthode `WeatherComponent.filteringTown()` en mockant la méthode `weatherService.getCurrentWeather()`.<br>
    Ecrire des tests unitaires pour la méthode `WeatherComponent.filteringTown()` en prennant soin de gérer les différents cas possibles.</br>
    **Exemple de mock** :
    ``` javascript
    it('<nom du test à changer>', () => {
        ...
        // Création du mock    
        const getCurrentWeatherMock = jest.fn(() =>
          of(MOCK_TONWS_WEATHER)
        );
   
        // Remplacement de la vraie méthode par le mock
        component['weatherService']['getCurrentWeather'] = getCurrentWeatherMock;
        
        // Déclenche la détection des changements pour appliquer ces changements au component 
        fixture.detectChanges();    
      
        // Exécution de la méthode à tester
        component['filteringTown'](null);
   
        // Vérification de l'appel au mock
        expect(getCurrentWeatherMock).toHaveBeenCalledTimes(1)
   
        // Autres vérifications
        ...
    });
    ```
   <br>

### C - Tests E2E avec UUV
Voir [Kata E2E UUV](https://github.com/e2e-test-quest/kata-e2e-uuv/)

### D - Tests Store : NGXS Store
![NGXS Store](https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1.25,format=auto/https%3A%2F%2F490253082-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-L9CoGJCq3UCfKJ7RCUg%252Favatar.png%3Fgeneration%3D1522797881064033%26alt%3Dmedia)
1. Créer dans le dossier `src/app/stores/weather` un fichier state `weather.state.ts` et un fichier d'actions `weather.action.ts`
2. Migrer la Selection d'une ville `(TownSelectorComponent.onSelectTown(...)`) vers le store :
   1. Ajouter la propriété `selectedTownWeather` dans le state `weather.state.ts` pour porter l'information de la ville sélectionnée
   2. Déclarer l'action de selection d'une ville `selectTown` dans le fichier `weather.action.ts`
   3. Implémenter l'action dans le fichier `weather.state.ts`
   4. Mettre à jour les components `weather`, `weather-details`, `town-selector` pour utiliser le state `weather.state.ts`, l'action `selectTown` et le module `app-module`.
   5. Rajouter les modifications nécessaire pour que les tests unitaires s'exécute sans erreur 
3. Migrer la liste des Weather (`WeatherComponent.filteringTown(...)`) vers le store :
   1. Enrichir le state `weather.state.ts` d'une propriété portant la liste des Weather
   2. Rajouter dans le fichier `weather.action.ts`, une action prenant en paramètre un string pour filtrer la liste des Weather
   3. Mettre à jour les components `weather`, `weather-details`, `town-selector` pour utiliser le state et l'action rajouté
   4. Rajouter les modifications nécessaire pour que les tests unitaires s'exécute sans erreur
