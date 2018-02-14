package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"resources/features/Rebalance.feature"} ,
				 monochrome = true,
				 glue = "steps",
				 //tags = "@rebalance",
				 plugin= {"pretty",
					        "html:target/site/cucumber-report-html",
					        "json:target/cucumber.json",
					        "pretty:target/cucumber-pretty.txt",
					        "usage:target/cucumber-usage.json" })

public class RunCukes extends AbstractTestNGCucumberTests{

}
