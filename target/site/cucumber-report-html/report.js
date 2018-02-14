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
  "duration": 5744471219,
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
  "duration": 3078571054,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyLoginPage()"
});
formatter.result({
  "duration": 100392867,
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
  "duration": 4983134793,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyHomePage()"
});
formatter.result({
  "duration": 16580536,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.manageButton()"
});
formatter.result({
  "duration": 1999914653,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyManagePage()"
});
formatter.result({
  "duration": 10422052,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.createRebalanceBatchButton()"
});
formatter.result({
  "duration": 2593349311,
  "status": "passed"
});
formatter.match({
  "location": "RebalanceStep.verifyCreateRebalanceBatch()"
});
formatter.result({
  "duration": 20360110,
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
});formatter.result({
  "duration": 613150683289,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.RebalanceStep.select_Investment_Program_Option_as(Unknown Source)\r\n\tat ✽.When Select Investment Program Option as \"Northwestern Mutual Signature Choice\"(resources/features/Rebalance.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RebalanceStep.searchButton()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "RebalanceStep.continueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RebalanceStep.verifyRebalanceSelectedAccounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RebalanceStep.rebalanceButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4226402782,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d64.0.3282.140)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DESKTOP-TVBMDRG\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\Srinidhi\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.140, webStorageEnabled: true}\nSession ID: 4119a05b4e319e3932cac708ecff0454\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:343)\r\n\tat steps.Hook.TearDownTest(Hook.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});