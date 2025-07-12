package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class SpringLearnApplication {

	public static void main(String[] args) {
		//System.out.println("SpringLearnApplication started successfully!");
		//displayDate();
		SpringApplication.run(SpringLearnApplication.class, args);
	}
	
	/*public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date parsedDate = format.parse("31/12/2018");
            System.out.println("Parsed Date: " + parsedDate);
        } catch (Exception e) {
            System.out.println("Error parsing date: " + e.getMessage());
        }
    }*/

}
