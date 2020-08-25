@test
Feature: Retrieve fixtures

  Scenario: Retrieve all fixtures
    When  I retrieve all fixtures
    Then  verify status code is 200
    And   verify that there are 3 fixtures
    Then  verify that each fixture has a fixtureId value

  Scenario:Retrieve fixture by handling the latency
    Given I create a new fixture by handling the latency
    When I retrieve fixture by id
    Then verify status code is 200
