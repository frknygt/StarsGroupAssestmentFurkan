$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fixtures/DeleteFixture.feature");
formatter.feature({
  "name": "Delete fixture",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Create and delete a fixture",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I create a new fixture",
  "keyword": "When "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.PostFixtureStepDef.i_create_a_new_fixture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete created fixture by id",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.DeleteStepDefs.i_delete_created_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Fixture has been deleted\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.DeleteStepDefs.verify_that_message_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I retrieve fixture by id",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.i_retrieve_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Fixture not found\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.DeleteStepDefs.verify_that_message_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/fixtures/GetFixture.feature");
formatter.feature({
  "name": "Get fixtures",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Get all fixtures",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I retrieve all fixtures",
  "keyword": "When "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.i_retrieve_all_fixtures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that there are 3 fixtures",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_that_there_are_fixtures(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that each fixture has a fixtureId value",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_that_each_fixture_has_a_fixtureId_value()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get fixture by handling the latency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I create a new fixture by handling the latency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.i_create_a_new_fixture_by_handling_the_latency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I retrieve fixture by id",
  "keyword": "When "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.i_retrieve_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/fixtures/PostFixture.feature");
formatter.feature({
  "name": "Post fixture",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Store a new fixture",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I create a new fixture",
  "keyword": "Given "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.PostFixtureStepDef.i_create_a_new_fixture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Fixture has been added\" message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.DeleteStepDefs.verify_that_message_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I retrieve fixture by id",
  "keyword": "When "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.GetFixtureStepDef.i_retrieve_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that new fixture\u0027s first object in the teams array has a teamId of \"HOME\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.PostFixtureStepDef.verify_that_new_fixture_s_first_object_in_the_teams_array_has_a_teamId_of(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});