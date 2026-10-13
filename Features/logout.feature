@Logout
Feature: Adactin hotel app Logout functionality

  @PositiveTC
  Scenario: To Verify whether the user is able to logout from the application
    Given User logins with the correct credential
    When User clicks on the Logout button
    Then User is redirected to the login page
