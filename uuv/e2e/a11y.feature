Feature: A11y

  Scenario: Axe Core no issues on homepage
    When I visit path "http://localhost:4200"
    Then I should not have any axe-core accessibility issue

  Scenario: Axe Core no issues of critical level
    When I visit path "http://localhost:4200"
    When I click on button named "Get started"
    Then I should not have any axe-core critical accessibility issue
