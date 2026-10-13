@fillHotelDetails
Feature: Adactin hotel app Search functionality

  @PositiveTC
  Scenario: To Verify whether the user is able to fill the hotel details and book the hotel
    Given User logins with the correct credentials, then provide all the details
    When User enters the First Name, Last Name, Billing Address
    When User enters the Credit Card Number, Credit Card Type, Expiry Date, CVV Number
    Then User clicks on the Book Now button

  @NegativeTC
  Scenario: To Verify whether the user is able to fill the hotel details and book the hotel with leaving the First Name field empty
    Given User logins with valid credential and then provide the details
    When User doesnot enter the First Name
    When User enters the Last Name, Billing Address, Credit Card Number, Credit Card Type, Expiry Date, CVV Number
    Then User taps on the Book Now button

  @NegativeTC
  Scenario: To Verify whether the user is able to fill the hotel details and book the hotel with leaving the Last Name field empty
    Given User logins with correct credentials and then provide the details
    When User enters the First Name
    When User doesnot enter the Last Name
    When User fills the Billing Address, Credit Card Number, Credit Card Type, Expiry Date, CVV Number
    Then User clicks the Book Now button

  @NegativeTC
  Scenario: To Verify whether the user is able to fill the hotel details and book the hotel with less than 16 digit in the Credit Card Number field
    Given User login with the valid credential
    When User enters the First Name, Last Name, Billing Address
    When User enters the Credit Card Number with less than 16 digit
    When User fills the Credit Card Type, Expiry Date, CVV Number
    Then User clicks Book Now button

  @NegativeTC
  Scenario: To Verify whether the user is able to fill the hotel details and book the hotel with expired date in the Expiry Date field
    Given User login with valid credential
    When User fills the First Name, Last Name, Billing Address
    When User fills the Credit Card Number, Credit Card Type
    When User enters the Expired date in the Expiry Date field
    When User fills the CVV Number
    Then User then taps on Book Now button
