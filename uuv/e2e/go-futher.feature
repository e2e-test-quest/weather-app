Feature: Go futher
  Background:
    Given I set viewport with width 768 and height 1024

  Scenario: Mocking town list
    Given I mock a request GET on url "/assets/data/mock.json" named "mock-weather-app" with fixture mock-weather-app.json
    And I visit path "/?isStarted=true"
    # Checks the list of available towns.
    Then I should see elements of the list with name "Available Towns"
      | Douala |
      | Tunis  |
      | Lille  |
      | Dubaï  |
