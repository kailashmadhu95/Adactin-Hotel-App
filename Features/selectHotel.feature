@SelectHotel
Feature: Adactin hotel app Search functionality

  @PositiveTC
  Scenario: To Verify whether the user is able to select the hotel and continue
    Given User logins with the correct credential and then provide the details
    When User clicks on the Radio button to select the hotel
    Then User clicks on the Continue button

  @NegativeTC
  Scenario: To Verify whether the user is able to select the hotel and continue without selecting the hotel
    Given User logins with the valid credential and then provide the details
    When User doesnot clicks on the Radio button to select the hotel
    Then User taps on the Continue button
