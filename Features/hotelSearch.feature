@Search
Feature: Adactin hotel app Search functionality

  @PositiveTC
  Scenario: To Verify whether the user is able to Search for the hotel
    Given User logins with the correct credential
    When User selects the Locations, Hotels, Room Types, Number of room
    When User enters the Check-In date and Check-Out date
    When User select the Adult and Children per room
    Then User clicks on the search button

  @NegativeTC
  Scenario: To Verify whether the user is able to Search for the hotel with leaving the room type field empty
    Given User logins with the valid credential
    When User selects the locations, hotels, number of room and doesnot select the room type
    When User fills the Check-In date and Check-Out date
    When User selects the adult and children per rooms
    Then User hits on the search

  @NegativeTC
  Scenario: To Verify whether the user is able to Search for the hotel with the previous date in the Check-In and Check-Out date field
    Given User login with the correct credentials
    When User selects the locations, hotels, room types, number of rooms
    When User enter the previous dates in the Check-In and Check-Out date field
    When User selects the Adult and Children per room
    Then User hits on the search button
