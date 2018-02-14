package steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Hook extends BaseUtil{

    private BaseUtil base;
       
    public Hook(BaseUtil base) {
        this.base = base;
    }

    public static String scenarioName;
    Properties prop = new Properties();
	InputStream input = null;
	
  
    @Before
    public void InitializeTest(Scenario scenario) throws IOException {
		
    	scenarioName= scenario.getName();
		System.out.println(scenarioName);
		
		input = new FileInputStream("resources//config//configuration.properties");
		prop.load(input);
		
		String browserName = prop.getProperty("BrowserName");
		System.out.println(browserName);
		System.out.println(prop.getProperty("BaseURL"));
		
		if(browserName.equalsIgnoreCase("FireFox")){
			 File file = new File("driver//geckodriver.exe");
			 System.setProperty("webdriver.firefox.marionette", file.getAbsolutePath());
			 base.driver = new FirefoxDriver();
			 base.driver.manage().window().maximize();
			
		} else if(browserName.equalsIgnoreCase("Chrome")){
			 File file = new File("driver//chromedriver.exe");
			 System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
			 base.driver = new ChromeDriver();
			 base.driver.manage().window().maximize();
			 
		} else if(browserName.equalsIgnoreCase("IE")){
			File file = new File("driver//IEDriverServer.exe");
		    System.setProperty("webdriver.ie.driver", file.getAbsolutePath());
			base.driver = new InternetExplorerDriver();
			base.driver.manage().window().maximize();
			
		} else {
			
            throw new IllegalArgumentException("The Browser Type is Undefined");
            
     }
        
    }

    public static String getScenarioName() {
		 return scenarioName;
	 }

    @After
    public void TearDownTest(Scenario scenario) {
        if (scenario.isFailed()) {
            System.out.print("On Failure Test Method");
            TakesScreenshot scrShot =((TakesScreenshot)base.driver);
            File source = scrShot.getScreenshotAs(OutputType.FILE);
            File destination = new File("screen-shots\\"+ getScenarioName()+"\\"+ getScenarioName()+".png");
            try {
    			FileUtils.copyFile(source, destination);
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
            System.out.print("Screenshot taken");
        }
        base.driver.close();
        System.out.println("Closing the browser");
    }

}
