Feature: First test
  Scenario: Homepage
    Given I visit path "/"
    Then I should see a title named "Welcome to Weather App"
     And I should see a button named "Get started"

  Scenario: Weather - "Nothing to display" must be displayed
    Given I visit path "/"
    # Click on <Get started> button
    When I click on button named "Get started"
    # Check that there's nothing to display because there is no town selected.
    Then I should see a title named "Nothing to display"

  Scenario: Weather - Town List must be ok
    When I visit path "/?isStarted=true"
    # Checks the list of available towns.
    Then I should see elements of the list with name "Available Towns"
      | Douala  |
      | Tunis   |
      | Limoges |

  Scenario: TownSelection - Douala
    Given I visit path "/?isStarted=true"
    When Within a list named "Available Towns"
    And I click on element with role "listitem" and name "Douala"
    # Check the weather details for Douala town
    Then Within the element with aria-label "Weather of Douala"
    And I should see a title named "Douala"
    And I should see an element with content "min: 10.8 °c"

  Scenario: TownResearch - Filter
    Given I visit path "/?isStarted=true"
    # Click on <Get started> button
    When Within an text box named "Search for a town"
    And I type the sentence "i"
    And I reset context
    # Click on <Filter> button
    And I click on button named "Filter"
    # Checks the list of available towns.
    Then I should see elements of the list with name "Available Towns"
      | Tunis   |
      | Limoges |

  Scenario: Add new town - fields
    When I visit path "/add-new-town"
    Then I should see a title named "Add new town"
     And I should see an alert named "Warning: Fields marked with an * are required"
     And I should see a text box named "Town name"
     And I should see a spin button named "Latitude"
     And I should see an spin button named "Longitude"
     And I should see a text box named "Description"
     And I should see a button named "Submit new town form" and containing "Submit"
     And I should see a button named "Back to town list" and containing "Back"

  Scenario: Add new town - Submit error
    When I visit path "/add-new-town"
     And Within an text box named "Town name"
     And I type the sentence "Paris"
     And I reset context
     And Within an spin button named "Latitude"
     And I type the sentence "48,866667"
     And I reset context
     And Within an spin button named "Longitude"
     And I type the sentence "2,333333"
     And I reset context
     And Within an text box named "Description"
     And I type the sentence "Ville lumière"
     And I reset context
     And I click on button named "Submit new town form"
    Then I should see an alert named "An error occurred please try again later"

  Scenario: Add new town - Submit Success
    Given I mock a request GET on url "/assets/data/mock.json" named "mock-new-town" with fixture mock-new-town.json
     And I mock a request POST on url "https://e2e-test-quest.github.io/weather-app/api" named "mock-post-new-town" with content "Success"
    When I visit path "/add-new-town"
     And Within an text box named "Town name"
     And I type the sentence "Paris"
     And I reset context
     And Within an spin button named "Latitude"
     And I type the sentence "48,866667"
     And I reset context
     And Within an spin button named "Longitude"
     And I type the sentence "2,333333"
     And I reset context
     And Within an text box named "Description"
     And I type the sentence "Ville lumière"
     And I reset context
     And I click on button named "Submit new town form"
    Then I should see elements of the list with name "Available Towns"
      | Douala  |
      | Tunis   |
      | Limoges |
      | Paris |
