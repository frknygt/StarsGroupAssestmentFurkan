$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fixtures/Delete.feature");
formatter.feature({
  "name": "Delete fixture",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create and delete a fixture",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
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
});