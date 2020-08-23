package com.starsGroup.fixture.step_definitions;

import com.starsGroup.fixture.dto.fixtures.request.CreateFixtureRequest;
import com.starsGroup.fixture.dto.fixtures.response.RetrieveFixtureResponse;
import com.starsGroup.fixture.utilities.ConfigurationReader;
import com.starsGroup.fixture.utilities.Requests;
import com.starsGroup.fixture.utilities.SharedObjects;
import io.cucumber.java.en.*;

import static org.junit.Assert.*;

public class CreateStepDefs {

  String fixtureApi = ConfigurationReader.get("fixture_api");

  @When("I create a new fixture")
  public void i_create_a_new_fixture() {

    String body = new CreateFixtureRequest().getBody();
    SharedObjects.postedFixtureId = new CreateFixtureRequest().fixtureId;
    SharedObjects.response = Requests.postRequest(fixtureApi + "fixture", body);
  }

  @Then("verify that new fixture's first object in the teams array has a teamId of {string}")
  public void verify_that_new_fixture_s_first_object_in_the_teams_array_has_a_teamId_of(
      String expectedTeamId) {
    String actualTeamId =
        SharedObjects.response
            .body()
            .as(RetrieveFixtureResponse.class)
            .getFootballFullState()
            .getTeams()
            .get(0)
            .getTeamId();
    assertEquals(expectedTeamId, actualTeamId);
  }
}
