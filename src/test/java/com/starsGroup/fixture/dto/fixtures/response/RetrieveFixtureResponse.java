package com.starsGroup.fixture.dto.fixtures.response;

import java.util.HashMap;
import java.util.Map;

public class RetrieveFixtureResponse {

  private String fixtureId;
  private FootballFullState footballFullState;
  private Map<String, Object> additionalProperties = new HashMap<String, Object>();

  public String getFixtureId() {
    return fixtureId;
  }

  public void setFixtureId(String fixtureId) {
    this.fixtureId = fixtureId;
  }

  public FootballFullState getFootballFullState() {
    return footballFullState;
  }

  public void setFootballFullState(FootballFullState footballFullState) {
    this.footballFullState = footballFullState;
  }

  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  public void setAdditionalProperty(String name, Object value) {
    this.additionalProperties.put(name, value);
  }
}
