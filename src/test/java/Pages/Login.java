package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import Base.BaseUtil;

public class Login extends BaseUtil{

    public BaseUtil base;
    
       public Login(WebDriver driver) {

    	   PageFactory.initElements(driver, this);
    
       }

	    @FindBy(how = How.ID, using = "userid")
	    public WebElement useridLocator;
	
	    @FindBy(how = How.ID, using = "password")
	    public WebElement passwordLocator;
	    
	    @FindBy(how = How.ID, using = "Login")
	    public WebElement loginButton;
  

	    public WebElement useridLocator() {
			return useridLocator;
		}
	
	    public WebElement passwordLocator() {
			return passwordLocator;
		}
	    
	    public WebElement loginButton() {
			return loginButton;
		}
    
 
   
}