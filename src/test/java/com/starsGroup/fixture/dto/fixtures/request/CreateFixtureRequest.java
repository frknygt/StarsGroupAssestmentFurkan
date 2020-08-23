package com.starsGroup.fixture.dto.fixtures.request;

import com.starsGroup.fixture.utilities.ConfigurationReader;
import com.starsGroup.fixture.utilities.Requests;
import io.restassured.response.Response;
import java.util.List;

public class CreateFixtureRequest {
  public int fixtureId = newFixtureId();

  private String body =
      "{\n"
          + "    \"fixtureId\": \""
          + fixtureId
          + "\",\n"
          + "    \"fixtureStatus\": {\n"
          + "        \"displayed\": false,\n"
          + "        \"suspended\": true\n"
          + "    },\n"
          + "    \"footballFullState\": {\n"
          + "        \"homeTeam\": \"Garforth FC\",\n"
          + "        \"awayTeam\": \"York FC\",\n"
          + "        \"finished\": false,\n"
          + "        \"gameTimeInSeconds\": 950,\n"
          + "        \"goals\": [\n"
          + "            {\n"
          + "                \"clockTime\": 640,\n"
          + "                \"confirmed\": true,\n"
          + "                \"id\": 678606,\n"
          + "                \"ownGoal\": false,\n"
          + "                \"penalty\": false,\n"
          + "                \"period\": \"FIRST_HALF\",\n"
          + "                \"playerId\": 560617,\n"
          + "                \"teamId\": \"1\"\n"
          + "            }\n"
          + "        ],\n"
          + "        \"period\": \"FIRST_HALF\",\n"
          + "        \"possibles\": [],\n"
          + "        \"corners\": [],\n"
          + "        \"redCards\": [],\n"
          + "        \"yellowCards\": [],\n"
          + "        \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n"
          + "        \"started\": true,\n"
          + "        \"teams\": [\n"
          + "            {\n"
          + "                \"association\": \"HOME\",\n"
          + "                \"name\": \"Garforth-FC\",\n"
          + "                \"teamId\": \"HOME\"\n"
          + "            },\n"
          + "            {\n"
          + "                \"association\": \"AWAY\",\n"
          + "                \"name\": \"York-FC\",\n"
          + "                \"teamId\": \"AWAY\"\n"
          + "            }\n"
          + "        ]\n"
          + "    }\n"
          + "}";

  public String getBody() {

    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }

  private int newFixtureId() {
    Response response = Requests.getRequest(ConfigurationReader.get("fixture_api") + "fixtures");

    List<String> fixtureIds = response.body().path("fixtureId");

    return fixtureIds.size() + 1;
  }

  public int getFixtureId() {
    return fixtureId;
  }

  public void setFixtureId(int fixtureId) {
    this.fixtureId = fixtureId;
  }
}
