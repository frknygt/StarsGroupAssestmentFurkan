package com.starsGroup.fixture.dto.fixtures.response;

import java.util.HashMap;
import java.util.Map;

public class Team {

  private String association;
  private String name;
  private String teamId;
  private Map<String, Object> additionalProperties = new HashMap<String, Object>();

  public String getAssociation() {
    return association;
  }

  public void setAssociation(String association) {
    this.association = association;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getTeamId() {
    return teamId;
  }

  public void setTeamId(String teamId) {
    this.teamId = teamId;
  }

  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  public void setAdditionalProperty(String name, Object value) {
    this.additionalProperties.put(name, value);
  }
}
