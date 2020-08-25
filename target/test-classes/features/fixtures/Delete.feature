@test
Feature: Delete fixture
  Scenario: Create and delete a fixture
    When I create a new fixture
    And verify status code is 200
    And  I delete created fixture by id
    And verify that "Fixture has been deleted" message is displayed
    And I retrieve fixture by id
    Then verify that "Fixture not found" message is displayed