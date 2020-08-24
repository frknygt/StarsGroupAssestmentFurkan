Feature: Create fixture
 @test
  Scenario: Store a new fixture
    Given I create a new fixture
    And verify status code is 200
    And  verify that "Fixture has been added" message is displayed
    When I retrieve fixture by id
    Then verify that new fixture's first object in the teams array has a teamId of "HOME"