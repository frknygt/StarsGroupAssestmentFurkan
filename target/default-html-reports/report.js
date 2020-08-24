$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fixtures/Retrieve.feature");
formatter.feature({
  "name": "Retrieve fixtures",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Retrieve all fixtures",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
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
  "status": "passed"
});
formatter.step({
  "name": "verify that each fixture has a fixtureId value",
  "keyword": "Then "
});
formatter.match({
  "location": "com.starsGroup.fixture.step_definitions.RetrieveStepDefs.verify_that_each_fixture_has_a_fixtureId_value()"
});
formatter.result({
  "status": "passed"
});
});