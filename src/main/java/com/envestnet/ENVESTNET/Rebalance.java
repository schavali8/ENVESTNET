package com.envestnet.ENVESTNET;

import java.io.File;
import java.util.concurrent.TimeUnit;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Rebalance {
  private static WebDriver driver;
  private static String baseUrl;
 
  public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
	  
  		File file = new File("driver//chromedriver.exe");
  		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
  		driver = new ChromeDriver();
	 	driver.manage().window().maximize();
	 	baseUrl = "https://nmuat.envestnet.com/";
     	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
     
     	driver.get(baseUrl + "/NM/default.aspx");
	    driver.findElement(By.id("userid")).clear();
	    driver.findElement(By.id("userid")).sendKeys("HS108");
	    driver.findElement(By.id("password")).clear();
	    driver.findElement(By.id("password")).sendKeys("HS10812");
	    driver.findElement(By.id("Login")).click();
		    
	    WebDriverWait wait = new WebDriverWait(driver, 10);
	    WebElement manage = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Manage")));
	    manage.click();
	    
	    WebElement createRebalanceBatch = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Create Rebalance Batch")));
	    createRebalanceBatch.click();
	    
	    WebElement checkBox = driver.findElement(By.xpath("//span[contains(text(),'Northwestern Mutual Signature Choice')]"));
	    String checkBoxStatus = checkBox.getAttribute("id").toString();
	    String checkBoxSelection = checkBoxStatus.replace("iplabel", "ipcheckbox");
	    driver.findElement(By.id(checkBoxSelection)).click();
	    
	    WebElement searchButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("_ctl0_searchbutton")));
	    searchButton.click();
	 
	    WebElement accountNumber = driver.findElement(By.xpath("//span[contains(text(),'B40005363')]"));
	    String accountNumbercheckbox = accountNumber.getAttribute("id").toString();
	    String accountNumbercheckboxSelection = accountNumbercheckbox.replace("accountno", "selectGoal");
	    driver.findElement(By.id(accountNumbercheckboxSelection)).click();
	  
	    driver.findElement(By.id("_ctl0_batchdescription")).clear();
	    driver.findElement(By.id("_ctl0_batchdescription")).sendKeys("Batch Execution");
	    
	    WebElement continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("_ctl0_rbbuttongroup_continue")));
	    continueButton.click();
	  
	    WebElement rebalanceButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("_ctl0_btnRebalance")));
	    rebalanceButton.click();
	   
	    driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
	    Thread.sleep(5000);
	    
	    String rebalanceCompletedStatus = driver.findElement(By.xpath("//SPAN[@id='lblStatus']")).getText();
	    System.out.println(rebalanceCompletedStatus);
	    assertEquals("Rebalance Completed", rebalanceCompletedStatus);
	    
	    driver.quit();

	}

}
