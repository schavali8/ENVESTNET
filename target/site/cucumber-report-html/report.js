$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/Rebalance.feature");
formatter.feature({
  "line": 2,
  "name": "Rebalance Testcase",
  "description": "",
  "id": "rebalance-testcase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@rebalance"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Automated Test Scrits for Rebalance",
  "description": "",
  "id": "rebalance-testcase;automated-test-scrits-for-rebalance",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@rebalance"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch Browser and Navigate to Envestnet URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify whether Home page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Manage Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify whether Manage page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Create Rebalance Batch Button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify whether Create Rebalance Batch page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select Investment Program Option as \"\u003cInvestmentProgram\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Select Account Number as \"\u003cAccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter Batch Description as \"\u003cBatchDescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify whether Rebalance - Selected Accounts page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on RebalanceButton Button",
  "keyword": "When "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "rebalance-testcase;automated-test-scrits-for-rebalance;",
  "rows": [
    {
      "cells": [
        "Username",
        "",
        "Password",
        "",
        "InvestmentProgram",
        "",
        "AccountNumber",
        "",
        "BatchDescription"
      ],
      "line": 23,
      "id": "rebalance-testcase;automated-test-scrits-for-rebalance;;1"
    },
    {
      "cells": [
        "HS108",
        "",
        "HS10812",
        "",
        "Northwestern Mutual Signature Choice",
        "",
        "B40005363",
        "",
        "Batch Execution"
      ],
      "line": 24,
      "id": "rebalance-testcase;automated-test-scrits-for-rebalance;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5606270871,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Automated Test Scrits for Rebalance",
  "description": "",
  "id": "rebalance-testcase;automated-test-scrits-for-rebalance;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rebalance"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch Browser and Navigate to Envestnet URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"HS108\" and \"HS10812\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Verify whether Home page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Manage Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify whether Manage page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Create Rebalance Batch Button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify whether Create Rebalance Batch page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select Investment Program Option as \"Northwestern Mutual Signature Choice\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Select Account Number as \"B40005363\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter Batch Description as \"Batch Execution\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click on Continue Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify whether Rebalance - Selected Accounts page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on RebalanceButton Button",
  "keyword": "When "
});
formatter.match({
  "location": "RebalanceStep.launchEnvestnetURL()"
});
formatter.result({
  "duration": 1257232011,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyLoginPage()"
});
formatter.result({
  "duration": 13843931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HS108",
      "offset": 32
    },
    {
      "val": "HS10812",
      "offset": 44
    }
  ],
  "location": "RebalanceStep.enter_Username_and_Password_as_and(String,String)"
});
formatter.result({
  "duration": 3263403895,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyHomePage()"
});
formatter.result({
  "duration": 12512160,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.manageButton()"
});
formatter.result({
  "duration": 1130931102,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyManagePage()"
});
formatter.result({
  "duration": 6393752,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.createRebalanceBatchButton()"
});
formatter.result({
  "duration": 1020915230,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyCreateRebalanceBatch()"
});
formatter.result({
  "duration": 7018961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Northwestern Mutual Signature Choice",
      "offset": 37
    }
  ],
  "location": "RebalanceStep.select_Investment_Program_Option_as(String)"
});
formatter.result({
  "duration": 99202417,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.searchButton()"
});
formatter.result({
  "duration": 3312533778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "B40005363",
      "offset": 26
    }
  ],
  "location": "RebalanceStep.select_Account_Number_as(String)"
});
formatter.result({
  "duration": 100983611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batch Execution",
      "offset": 28
    }
  ],
  "location": "RebalanceStep.batchDescription(String)"
});
formatter.result({
  "duration": 400694615,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.continueButton()"
});
formatter.result({
  "duration": 1416687241,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyRebalanceSelectedAccounts()"
});
formatter.result({
  "duration": 11712301,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.rebalanceButton()"
});
formatter.result({
  "duration": 1769453468,
  "status": "passed"
});
formatter.after({
  "duration": 74958044,
  "status": "passed"
});
});