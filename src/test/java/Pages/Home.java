package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import Base.BaseUtil;

public class Home extends BaseUtil{

    public BaseUtil base;
    
       public Home(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

	    @FindBy(how = How.LINK_TEXT, using = "Manage")
	    public WebElement manageButton;
	
	 
	    public WebElement manageButton() {
			return manageButton;
		}
	    
}