package com.data;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"com.data.controller","com.data.service"})
public class DataVisualizationApplication {

	public static void main(String[] args) {
		SpringApplication.run(DataVisualizationApplication.class, args);
	}

}
