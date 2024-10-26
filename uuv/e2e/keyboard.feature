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
