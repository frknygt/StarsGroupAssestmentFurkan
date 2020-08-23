package com.starsGroup.fixture.step_definitions;

import com.starsGroup.fixture.dto.fixtures.request.CreateFixtureRequest;
import com.starsGroup.fixture.dto.fixtures.response.RetrieveFixtureResponse;
import com.starsGroup.fixture.utilities.ConfigurationReader;
import com.starsGroup.fixture.utilities.Requests;
import com.starsGroup.fixture.utilities.SharedObjects;
import io.cucumber.java.en.*;
import io.restassured.response.Response;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import static org.junit.Assert.*;
import static org.hamcrest.Matchers.*;

public class RetrieveStepDefs {

  String fixtureApi = ConfigurationReader.get("fixture_api");

  @When("I retrieve all fixtures")
  public void i_retrieve_all_fixtures() {
    SharedObjects.response = Requests.getRequest(fixtureApi + "fixtures");
  }

  @Then("verify status code is {int}")
  public void verify_status_code_is(int status) {
    assertEquals(SharedObjects.response.statusCode(), status);
  }

  @Then("verify that there are {int} fixtures")
  public void verify_that_there_are_fixtures(int fixturesNumber) {
    List<String> fixtureId = SharedObjects.response.body().path("fixtureId");
    assertEquals(fixtureId.size(), fixturesNumber);
  }

  @Then("verify that each fixture has a fixtureId value")
  public void verify_that_each_fixture_has_a_fixtureId_value() {
    Response response = SharedObjects.response;

    response.then().assertThat().body("fixtureId", everyItem(notNullValue()));
  }

  @Given("I create a new fixture by handling the latency")
  public void i_create_a_new_fixture_by_handling_the_latency() throws Exception {
    String body = new CreateFixtureRequest().getBody();
    SharedObjects.postedFixtureId = new CreateFixtureRequest().fixtureId;
    String expectedMessage = "Fixture has been added";
    this.waitUntilStringFoundInResponse(fixtureApi + "fixture", body, expectedMessage, 10);
  }

  @When("I retrieve fixture by id")
  public void i_retrieve_fixture_by_id() {
    SharedObjects.response =
        Requests.getRequest(fixtureApi + "fixture/" + SharedObjects.postedFixtureId);

  }

  public void waitUntilStringFoundInResponse(
      String url, String body, String expectedMessage, int TIMEOUT) throws Exception {

    int i = 0;
    while (i < TIMEOUT) {
      SharedObjects.response = Requests.postRequest(url, body);
      if (SharedObjects.response.body().asString().contains(expectedMessage)) {
        break;
      } else {
        TimeUnit.SECONDS.sleep(1);
        ++i;
        if (i == TIMEOUT) {
          throw new TimeoutException("Timed out after waiting for " + i + " seconds");
        }
      }
    }
  }
}
