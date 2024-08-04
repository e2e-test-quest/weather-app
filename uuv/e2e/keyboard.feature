Feature: Keyboard Navigation

  Scenario: Focus on app logo - short mode
    Given I visit path "http://localhost:4200"
    When I start a keyboard navigation from the top of the page
    Then the next keyboard element focused should be a link named "Weather App's Logo"

  Scenario: Focus on app link - short mode
    Given I visit path "http://localhost:4200"
    When I start a keyboard navigation from the top of the page
    Then the next keyboard element focused should be a link named "Weather App's Logo"
    And the next keyboard element focused should be a link named "Home"

  Scenario: Focus on app link with back nav - short mode
    Given I visit path "http://localhost:4200"
    When I start a keyboard navigation from the top of the page
    Then the next keyboard element focused should be a link named "Weather App's Logo"
    And the next keyboard element focused should be a link named "Home"
    And the next keyboard element focused should be a button named "Get started"
    And the previous keyboard element focused should be a link named "Home"

  Scenario: Focus on Get Started button - short mode
    Given I visit path "http://localhost:4200"
    When I start a keyboard navigation from the top of the page
    Then the next keyboard element focused should be a link named "Weather App's Logo"
    And the next keyboard element focused should be a link named "Home"
    And the next keyboard element focused should be a button named "Get started"

  Scenario: Verify new town form keyboard navigation - short mode
    Given I visit path "http://localhost:4200/?isStarted=true"
    When I click on button named "Add new town"
    And I start a keyboard navigation from the top of the page
    Then the next keyboard element focused should be a link named "Weather App's Logo"
    And the next keyboard element focused should be a link named "Home"
    And the next keyboard element focused should be a text box named "Town name"
    And the next keyboard element focused should be a spin button named "Latitude"
    And the next keyboard element focused should be a spin button named "Longitude"
    And the next keyboard element focused should be a text box named "Description"
    And the next keyboard element focused should be a button named "Back to town list"
    And the next keyboard element focused should be a button named "Submit new town form"
  
  Scenario: Fill new town form with keyboard - short mode
    Given I visit path "http://localhost:4200/?isStarted=true"
    And I mock a request GET on url "http://localhost:4200/assets/data/mock.json" named "mock-new-town" with fixture mock-new-town.json
    And I mock a request POST on url "http://localhost:4200/api" named "mock-post-new-town" with content "Success"

    When I click on button named "Add new town"
    And I start a keyboard navigation from the top of the page
    And the next keyboard element focused should be a link named "Weather App's Logo"
    And the next keyboard element focused should be a link named "Home"

    And the next keyboard element focused should be a text box named "Town name"
    And I type the sentence "Paris"

    And the next keyboard element focused should be a spin button named "Latitude"
    And I type the sentence "10"

    And the next keyboard element focused should be a spin button named "Longitude"
    And I type the sentence "123"

    And the next keyboard element focused should be a text box named "Description"
    And I type the sentence "Simple Description"

    And the next keyboard element focused should be a button named "Back to town list"

    And the next keyboard element focused should be a button named "Submit new town form"

    And I click

    Then I should see a list named "Available Towns" and containing
      | Douala  |
      | Tunis   |
      | Limoges |
      | Paris   |
