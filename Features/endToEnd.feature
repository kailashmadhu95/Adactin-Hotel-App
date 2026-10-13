Feature: Adactin hotel app

    Scenario: To verify the signup screen with the valid data
    Given User navigate to the login screen
    When User clicks on the New User Register Here
    When User enters the username 
    When User enter the password and confirm password
    When User enter full name
    When User enter the email address
    When User the clicks on the Terms/Condition 
    Then User clicks on the Register button 

    Scenario: To verify the login page with the valid credential
    Given User navigate to the login page
    When User enters the username
    When User enters the password
    Then User click on Login button

    Scenario: To Verify whether the user is able to search the hotel
    Given User logins with the valid credential
    When User selects the Location, Hotels, Room Type, Number of rooms
    When User enters the Check-In and Check-Out dates
    When User select the Adult per room and Children per room
    Then User clicks on the Search button

    Scenario: To verify whether the user is able to view and confirm the details and continue
    Given User login with the valid credential and then provide the details
    When User clicks on the Radio button to select the hotel
    Then User clicks on the Continue button

    Scenario: To verify whether the user is able to book the hotel with there information
    Given User can login with the valid username and password, then provide the detail
    When User enters the First Name, Last Name, Billing Address
    When User enters the Credit Card Number, Credit Card Type, Expiry Date, CVV Number
    Then User clicks on the Book Now button

    Scenario: To verify whether the user is able to logout
    Given user Login with the valid set of data
    When User clicks on the Logout button

