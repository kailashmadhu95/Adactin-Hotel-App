@Signup
Feature: Adactin hotel app

    @PositiveTC
    Scenario: To verify the signup screen with the valid data
    Given User navigate to the login screen
    When User clicks on the New User Register Here
    When User enters the username 
    When User enter the password and confirm password
    When User enter full name
    When User enter the email address
    When User the clicks on the Terms/Condition 
    Then User clicks on the Register button 