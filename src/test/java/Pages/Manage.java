package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import Base.BaseUtil;

public class Manage extends BaseUtil{

    public BaseUtil base;
    
       public Manage(WebDriver driver) {
        PageFactory.initElements(driver, this);
       }
	 
	    @FindBy(how = How.LINK_TEXT, using = "Create Rebalance Batch")
	    public WebElement createRebalanceBatchButton;
	
	  
	    public WebElement createRebalanceBatchButton() {
			return createRebalanceBatchButton;
		}
	   
	    
}