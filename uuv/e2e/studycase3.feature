Feature: Usecase 3

  Rule: Keyboard Navigation
    Scenario: Click on button through keyboard navigation
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      When I start a keyboard navigation from the top of the page
      And the next keyboard element focused should be a link named "Weather App's Logo"
      And the next keyboard element focused should be a link named "Home"
      And the next keyboard element focused should be a button named "Button 1"
      And I click
      Then I should see a title named "Hidden section"

    Scenario: Clickable element no focusable
      # This test fails because button 2 is not focusable as it is not a button
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      When I start a keyboard navigation from the top of the page
      Then the next keyboard element focused should be a link named "Weather App's Logo"
      And the next keyboard element focused should be a link named "Home"
      And the next keyboard element focused should be a button named "Button 1"
      And the next keyboard element focused should be a button named "Button 2"

  Rule: Form fill
    Scenario: Fill new town form with mouse
      Given I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
      And I mock a request GET on url "https://e2e-test-quest.github.io/weather-app/data/mock.json" named "mock-new-town" with fixture mock-new-town.json
      And I mock a request POST on url "https://e2e-test-quest.github.io/weather-app/api" named "mock-post-new-town" with content "Success"
      And I click on button named "Add new town"

      And I type the sentence "Paris" in the text box named "Town name"
      And I type the sentence "10" in the spin button named "Latitude"
      And I type the sentence "123" in the spin button named "Longitude"
      And I type the sentence "Simple Description" in the text box named "Description"

      When I click on button named "Submit new town form"

      Then I should see the page title "Home"
      And I should see a list named "Available Towns" and containing
        | Douala  |
        | Tunis   |
        | Limoges |
        | Paris   |

    Scenario: Fill new town form with keyboard
      Given I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
      And I mock a request GET on url "https://e2e-test-quest.github.io/weather-app/data/mock.json" named "mock-new-town" with fixture mock-new-town.json
      And I mock a request POST on url "https://e2e-test-quest.github.io/weather-app/api" named "mock-post-new-town" with content "Success"

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

      And the next keyboard element focused should be a radio named "Small (under 150000)"

      And the next keyboard element focused should be a checkbox named "Allow automatic update"

      And the next keyboard element focused should be a button named "Back to town list"

      And the next keyboard element focused should be a button named "Submit new town form"

      And I click

      Then I should see a list named "Available Towns" and containing
        | Douala  |
        | Tunis   |
        | Limoges |
        | Paris   |

  Rule: Live update
    Scenario: Toaster notification
      Given I visit path "http://localhost:4200/add-new-town"

      And I type the sentence "Paris" in the text box named "Town name"
      And I type the sentence "10" in the spin button named "Latitude"
      And I type the sentence "123" in the spin button named "Longitude"
      And I type the sentence "Simple Description" in the text box named "Description"

      When I click on button named "Submit new town form"

      Then I should see an alert named "An error occurred please try again later"
      And I should see the page title "Add new town"

    Scenario: Popin display
      Given I visit path "http://localhost:4200/add-new-town"

      And I type the sentence "Paris" in the text box named "Town name"
      And I type the sentence "10" in the spin button named "Latitude"
      And I type the sentence "123" in the spin button named "Longitude"
      And I type the sentence "Simple Description" in the text box named "Description"

      When I click on button named "Submit new town form(with confirmation)"

      Then within a dialog named "Confirmation request"
      And I should see an element with content "Are you sure to submit ?"
      And I should see a button named "Close"
      And I should see a button named "Cancel"
      And I should see a button named "Save changes"

    Scenario: Popin focus
      Given I visit path "http://localhost:4200/add-new-town"

      And I type the sentence "Paris" in the text box named "Town name"
      And I type the sentence "10" in the spin button named "Latitude"
      And I type the sentence "123" in the spin button named "Longitude"
      And I type the sentence "Simple Description" in the text box named "Description"

      When I click on button named "Submit new town form(with confirmation)"
      And I should see a dialog named "Confirmation request"
      And I wait 500 ms
      And I start a keyboard navigation from the top of the page

      Then the next keyboard element focused should be a button named "Close"
      And the next keyboard element focused should be a button named "Cancel"
      And the next keyboard element focused should be a button named "Save changes"
