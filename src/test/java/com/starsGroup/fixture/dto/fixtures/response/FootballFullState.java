package com.starsGroup.fixture.dto.fixtures.response;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FootballFullState {

  private String homeTeam;
  private String awayTeam;
  private Boolean finished;
  private Integer gameTimeInSeconds;
  private String period;
  private List<Object> possibles = null;
  private List<Object> corners = null;
  private List<Object> redCards = null;
  private List<Object> yellowCards = null;
  private String startDateTime;
  private Boolean started;
  private List<Team> teams = null;
  private Map<String, Object> additionalProperties = new HashMap<String, Object>();

  public String getHomeTeam() {
    return homeTeam;
  }

  public void setHomeTeam(String homeTeam) {
    this.homeTeam = homeTeam;
  }

  public String getAwayTeam() {
    return awayTeam;
  }

  public void setAwayTeam(String awayTeam) {
    this.awayTeam = awayTeam;
  }

  public Boolean getFinished() {
    return finished;
  }

  public void setFinished(Boolean finished) {
    this.finished = finished;
  }

  public Integer getGameTimeInSeconds() {
    return gameTimeInSeconds;
  }

  public void setGameTimeInSeconds(Integer gameTimeInSeconds) {
    this.gameTimeInSeconds = gameTimeInSeconds;
  }

  public String getPeriod() {
    return period;
  }

  public void setPeriod(String period) {
    this.period = period;
  }

  public List<Object> getPossibles() {
    return possibles;
  }

  public void setPossibles(List<Object> possibles) {
    this.possibles = possibles;
  }

  public List<Object> getCorners() {
    return corners;
  }

  public void setCorners(List<Object> corners) {
    this.corners = corners;
  }

  public List<Object> getRedCards() {
    return redCards;
  }

  public void setRedCards(List<Object> redCards) {
    this.redCards = redCards;
  }

  public List<Object> getYellowCards() {
    return yellowCards;
  }

  public void setYellowCards(List<Object> yellowCards) {
    this.yellowCards = yellowCards;
  }

  public String getStartDateTime() {
    return startDateTime;
  }

  public void setStartDateTime(String startDateTime) {
    this.startDateTime = startDateTime;
  }

  public Boolean getStarted() {
    return started;
  }

  public void setStarted(Boolean started) {
    this.started = started;
  }

  public List<Team> getTeams() {
    return teams;
  }

  public void setTeams(List<Team> teams) {
    this.teams = teams;
  }

  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  public void setAdditionalProperty(String name, Object value) {
    this.additionalProperties.put(name, value);
  }
}
