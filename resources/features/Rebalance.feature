@rebalance
Feature: Rebalance Testcase

  @rebalance
  Scenario Outline: Automated Test Scrits for Rebalance
    Given Launch Browser and Navigate to Envestnet URL
    Then Verify whether Login page is correctly opened or not
    When Enter Username and Password as "<Username>" and "<Password>"
    Then Verify whether Home page is correctly opened or not
    When Click on Manage Button
    Then Verify whether Manage page is correctly opened or not
    When Click on Create Rebalance Batch Button
    Then Verify whether Create Rebalance Batch page is correctly opened or not
    When Select Investment Program Option as "<InvestmentProgram>"
    When Click on Search Button
    When Select Account Number as "<AccountNumber>"
    When Enter Batch Description as "<BatchDescription>"
    When Click on Continue Button
    Then Verify whether Rebalance - Selected Accounts page is correctly opened or not
    When Click on RebalanceButton Button

    Examples: 
      | Username |  | Password |  | InvestmentProgram                    |  | AccountNumber |  | BatchDescription |
      | HS108    |  | HS10812  |  | Northwestern Mutual Signature Choice |  | B40005363     |  | Batch Execution  |
