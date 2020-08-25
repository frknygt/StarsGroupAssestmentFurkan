$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fixtures/Create.feature");
formatter.feature({
  "name": "Create fixture",
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
  "location": "com.starsGroup.fixture.step_definitions.CreateStepDefs.i_create_a_new_fixture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_status_code_is(int)"
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
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.i_retrieve_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that new fixture\u0027s first object in the teams array has a teamId of \"HOME\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.CreateStepDefs.verify_that_new_fixture_s_first_object_in_the_teams_array_has_a_teamId_of(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/fixtures/Delete.feature");
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
  "location": "com.starsGroup.fixture.step_definitions.CreateStepDefs.i_create_a_new_fixture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_status_code_is(int)"
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
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.i_retrieve_fixture_by_id()"
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
formatter.uri("file:src/test/resources/features/fixtures/Retrieve.feature");
formatter.feature({
  "name": "Retrieve fixtures",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Retrieve all fixtures",
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
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.i_retrieve_all_fixtures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that there are 3 fixtures",
  "keyword": "And "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_that_there_are_fixtures(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c3\u003e but was:\u003c14\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_that_there_are_fixtures(RetrieveStepDefs.java:34)\r\n\tat ✽.verify that there are 3 fixtures(file:///C:/Users/avfrk/IdeaProjects/StarsGroupAssestmentFurkan/src/test/resources/features/fixtures/Retrieve.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify that each fixture has a fixtureId value",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_that_each_fixture_has_a_fixtureId_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Retrieve fixture by handling the latency",
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
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.i_create_a_new_fixture_by_handling_the_latency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I retrieve fixture by id",
  "keyword": "When "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.i_retrieve_fixture_by_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
});