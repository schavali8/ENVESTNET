package steps;

import static org.testng.Assert.assertEquals;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Base.BaseUtil;
import Pages.CreateRebalanceBatch;
import Pages.Home;
import Pages.Login;
import Pages.Manage;
import Pages.RebalanceSelectedAccounts;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.agent.builder.AgentBuilder.RedefinitionStrategy.BatchAllocator;

public class RebalanceStep extends BaseUtil{

    public BaseUtil base;
    public Login Login;
    public Home Home;
    public Manage Manage;
    public CreateRebalanceBatch CreateRebalanceBatch;
    public RebalanceSelectedAccounts RebalanceSelectedAccounts;
    
    Properties prop = new Properties();
   	InputStream input = null;
   	
     public RebalanceStep(BaseUtil base) {
    	this.base = base;
    	Login = new Login(base.driver);
    	Home = new Home(base.driver);
    	Manage = new Manage(base.driver);
    	CreateRebalanceBatch = new CreateRebalanceBatch(base.driver);
    	RebalanceSelectedAccounts = new RebalanceSelectedAccounts(base.driver);
    }
    
    @Given("^Launch Browser and Navigate to Envestnet URL$")
    public void launchEnvestnetURL() throws Throwable {
        input = new FileInputStream("resources//config//configuration.properties");
		prop.load(input);
		base.driver.manage().window().maximize();
		base.driver.get(prop.getProperty("BaseURL"));
    }

    @Then("^Verify whether Login page is correctly opened or not$")
    public void verifyLoginPage() throws Throwable {
    	 String loginPageTitle = base.driver.getTitle();
    	 assertEquals("Login", loginPageTitle);
    }
    
    @When("^Enter Username and Password as \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_Username_and_Password_as_and(String Username, String Password) throws Throwable {
    	Login.useridLocator().clear();
	   	Login.useridLocator().sendKeys(Username);
	   	Login.passwordLocator().clear();
	   	Login.passwordLocator().sendKeys(Password);
	   	Login.loginButton().click();
    }
    
    @Then("^Verify whether Home page is correctly opened or not$")
    public void verifyHomePage() throws Throwable {
		 String homePageTitle = base.driver.getTitle();
		 assertEquals("Home", homePageTitle);
    }
    
   
    @When("^Click on Manage Button$")
    public void manageButton() throws Throwable {
	 	WebDriverWait wait = new WebDriverWait(base.driver, 10);
    	WebElement manage = wait.until(ExpectedConditions.elementToBeClickable(Home.manageButton()));
    	manage.click();
		//Home.manageButton().click();
    }
    
    @Then("^Verify whether Manage page is correctly opened or not$")
    public void verifyManagePage() throws Throwable {
		 String managePageTitle = base.driver.getTitle();
		 assertEquals("Manage", managePageTitle);
    }
    
    @When("^Click on Create Rebalance Batch Button$")
    public void createRebalanceBatchButton() throws Throwable {
	 	WebDriverWait wait = new WebDriverWait(base.driver, 10);
    	WebElement manage = wait.until(ExpectedConditions.elementToBeClickable(Manage.createRebalanceBatchButton()));
		Manage.createRebalanceBatchButton().click();
	}
    
    @Then("^Verify whether Create Rebalance Batch page is correctly opened or not$")
    public void verifyCreateRebalanceBatch() throws Throwable {
		 String createRebalanceBatchTitle = base.driver.getTitle();
		 assertEquals("Create Rebalance Batch", createRebalanceBatchTitle);
    }
 
    @When("^Select Investment Program Option as \"([^\"]*)\"$")
    public void select_Investment_Program_Option_as(String ChecboxValue) throws Throwable {
    	WebElement checkBox = base.driver.findElement(By.xpath("//span[contains(text(),'"+ChecboxValue+"')]"));
	    String checkBoxStatus = checkBox.getAttribute("id").toString();
	    String checkBoxSelection = checkBoxStatus.replace("iplabel", "ipcheckbox");
	    base.driver.findElement(By.id(checkBoxSelection)).click();
    }

  
    @When("^Click on Search Button$")
    public void searchButton() throws Throwable {
    	WebDriverWait wait = new WebDriverWait(base.driver, 10);
    	WebElement searchButton = wait.until(ExpectedConditions.elementToBeClickable(CreateRebalanceBatch.searchButton()));
	    searchButton.click();
	}
    
    @When("^Select Account Number as \"([^\"]*)\"$")
    public void select_Account_Number_as(String AccountNumberValue) throws Throwable {
    	WebElement accountNumber = base.driver.findElement(By.xpath("//span[contains(text(),'"+AccountNumberValue+"')]"));
    	String accountNumbercheckbox = accountNumber.getAttribute("id").toString();
	    String accountNumbercheckboxSelection = accountNumbercheckbox.replace("accountno", "selectGoal");
	    base.driver.findElement(By.id(accountNumbercheckboxSelection)).click();   
    }
    
    @When("^Enter Batch Description as \"([^\"]*)\"$")
    public void batchDescription(String BatchDescription) throws Throwable {
    	CreateRebalanceBatch.batchdescription().clear();
    	CreateRebalanceBatch.batchdescription().sendKeys(BatchDescription);
    }
    
    @When("^Click on Continue Button$")
    public void continueButton() throws Throwable {
    	WebDriverWait wait = new WebDriverWait(base.driver, 10);
    	WebElement continueButton = wait.until(ExpectedConditions.elementToBeClickable(CreateRebalanceBatch.continueButton()));
    	continueButton.click();
	}
    
    @Then("^Verify whether Rebalance - Selected Accounts page is correctly opened or not$")
    public void verifyRebalanceSelectedAccounts() throws Throwable {
		 String rebalanceSelectedAccountsTitle = base.driver.getTitle();
		 assertEquals("Rebalance - Selected Accounts", rebalanceSelectedAccountsTitle);
    }
    
    @When("^Click on RebalanceButton Button$")
    public void rebalanceButton() throws Throwable {
    	WebDriverWait wait = new WebDriverWait(base.driver, 10);
    	WebElement rebalanceButton = wait.until(ExpectedConditions.elementToBeClickable(RebalanceSelectedAccounts.rebalanceButton()));
    	rebalanceButton.click();
	}
    
    
 }
