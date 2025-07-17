Feature: Gestion des Images

  Scenario: Informative image
    # This test fails because the informative image is missing alt text.
    When I visit path "http://localhost:4200/usecases/usecase-2"
    Then I should not see an image named "Save the date April 22, 2025"
    Then I should see an image named "Save the date April 22, 2025"

  Scenario: Image without alt text
    # This test fails there is at least one image without alt text attribute.
    When I visit path "http://localhost:4200/usecases/usecase-2"
    Then I should not see an image named ""

  Scenario: Button with decorative icon bad
    # This test fails because button decorative image got an alt text
    When I visit path "http://localhost:4200/usecases/usecase-2"
    Then I should not see a button named "Supprimer 1"
    Then I should see a button named "Supprimer 1"

  Scenario: Button with decorative icon ok
    When I visit path "http://localhost:4200/usecases/usecase-2"
    Then I should see a button named "Supprimer 2"
