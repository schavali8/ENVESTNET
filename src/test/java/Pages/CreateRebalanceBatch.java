package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import Base.BaseUtil;

public class CreateRebalanceBatch extends BaseUtil{

    public BaseUtil base;
    
       public CreateRebalanceBatch(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

	    @FindBy(how = How.ID, using = "_ctl0_searchbutton")
	    public WebElement searchButton;
	
	    @FindBy(how = How.ID, using = "_ctl0_batchdescription")
	    public WebElement batchdescription;
	   
	    @FindBy(how = How.ID, using = "_ctl0_rbbuttongroup_continue")
	    public WebElement continueButton;
	    
	 
	    public WebElement searchButton() {
			return searchButton;
		}
	    
	  
	    public WebElement batchdescription() {
			return batchdescription;
		}
	    
	    public WebElement continueButton() {
			return continueButton;
		}
}