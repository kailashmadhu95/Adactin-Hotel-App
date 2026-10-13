@Login
Feature: Adactin hotel app Login functionality

    @PositiveTC
    Scenario: To verify the login page again  with the correct  uname and pswd
    Given User nget enters  into the login page
    When User fills the uname
    When User fills the pswd
    Then User just hit on the  Login button

    @NegativeTC 
    Scenario: To verify the login page with the correct uname and incorrect pswd
    Given User navigates to the login page
    When User fills the valid userName
    When User fills the incorrect Passwd
    Then User clicks on the Login button

    @NegativeTC
    Scenario: To verify the login page with the incorrect uname and correct pswd
    Given User enters to the login page
    When User fill the incorrect username
    When User fill the valid Password
    Then User taps Login button

    @NegativeTC
    Scenario: To verify the login page with the blank uname and pswd
    Given User navigate to login page
    When User leaves uName blank
    When User leaves pswd blank
    Then User click Login button
    
    @NegativeTC
    Scenario: To verify the login page with the blank uname and valid pswd
    Given User navg to the Login page
    When User left the userName blank
    When User enter valid Passwd
    Then User hits the Login button

    @NegativeTC
    Scenario: To verify the login page with the valid uname and blank pswd
    Given User moves towards the Login page
    When User enters the correct userName
    When User leave Passwd blank
    Then User taps on the Login button
