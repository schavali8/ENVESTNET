package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import Base.BaseUtil;

public class RebalanceSelectedAccounts extends BaseUtil{

    public BaseUtil base;
    
       public RebalanceSelectedAccounts(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

	    @FindBy(how = How.ID, using = "_ctl0_btnRebalance")
	    public WebElement rebalanceButton;
	
	 
	    public WebElement rebalanceButton() {
			return rebalanceButton;
		}
	    
}