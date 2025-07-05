Feature: Approche Dev-Centric vs User-Centric

  Rule: Role ambiguity
    Scenario: DevCentric find button 1
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should see an element with testId "button1"

    Scenario: DevCentric find Button 2
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should see an element with testId "button2"

    Scenario: UserCentric find button 1
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should see a button named "Button 1"

    Scenario: UserCentric don't find Button 2
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should see a button named "Button 2"

  Rule: Seeing the invisible
    Scenario: DevCentric find button 3
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should see an element with testId "hidden-section"

    Scenario: UserCentric don't find Button 3
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      Then I should not see a title named "Hidden section"
      And I should see a title named "Hidden section"

    Scenario: UserCentric find button 3 when visible
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      When I click on button named "Button 1"
      Then I should see a title named "Hidden section"


  Rule: Visual duplication
    Scenario: UserCentric find multiple buy buttons
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      When I click on button named "Button 1"
      Then I should see a button named "Buy"

    Scenario: UserCentric find Mydroid title and button
      Given I visit path "http://localhost:4200/usecases/usecase-1"
      And I click on button named "Button 1"
      And within the element with aria-label "Bloc Mydroid"
      Then I should see a title named "Mydroid"
      And I should see a button named "Buy"
