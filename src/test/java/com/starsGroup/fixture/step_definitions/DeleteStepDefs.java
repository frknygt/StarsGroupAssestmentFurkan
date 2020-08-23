package com.starsGroup.fixture.step_definitions;

import com.starsGroup.fixture.utilities.ConfigurationReader;
import com.starsGroup.fixture.utilities.Requests;
import com.starsGroup.fixture.utilities.SharedObjects;
import io.cucumber.java.en.*;

import static org.junit.Assert.*;

public class DeleteStepDefs {

  String fixtureApi = ConfigurationReader.get("fixture_api");

  @Then("I delete created fixture by id")
  public void i_delete_created_fixture_by_id() {
    SharedObjects.response =
        Requests.deleteRequest(fixtureApi + "fixture/" + SharedObjects.postedFixtureId);

  }

  @When("verify that {string} message is displayed")
  public void verify_that_message_is_displayed(String expectedMessage) {
    String actualMessage = SharedObjects.response.body().asString();
    assertEquals(expectedMessage, actualMessage);
  }
}
