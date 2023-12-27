package com.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class EmpEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private int end_year;
	private String citylng;
	private String citylat;
	private int intensity;
	private String sector;
	private String topic;
	private String insight;
	private String swot;
	private String url;
	private String region;
	private String start_year;
	private String impact;
	private String added;
	private String published;
	private String city;
	private String country;
	private int relevance;
	private String pestle;
	private String source;
	private String title;
	private String likelihood;
	
	public  EmpEntity() {
		//default constructor for JPA, to create entity instances when fetching data from the database 
	}
	
	public EmpEntity(Long id, int end_year, String citylng, String citylat, int intensity, String sector,
			String topic, String insight, String swot, String url, String region, String start_year, String impact,
			String added, String published, String city, String country, int relevance, String pestle, String source,
			String title, String likelihood) {
		super();
		this.id = id;
		this.end_year = end_year;
		this.citylng = citylng;
		this.citylat = citylat;
		this.intensity = intensity;
		this.sector = sector;
		this.topic = topic;
		this.insight = insight;
		this.swot = swot;
		this.url = url;
		this.region = region;
		this.start_year = start_year;
		this.impact = impact;
		this.added = added;
		this.published = published;
		this.city = city;
		this.country = country;
		this.relevance = relevance;
		this.pestle = pestle;
		this.source = source;
		this.title = title;
		this.likelihood = likelihood;
	}
	
	
	public Long getId() {
		return id;
	}

	public int getEnd_year() {
		return end_year;
	}

	public String getCitylng() {
		return citylng;
	}

	public String getCitylat() {
		return citylat;
	}

	public int getIntensity() {
		return intensity;
	}

	public String getSector() {
		return sector;
	}

	public String getTopic() {
		return topic;
	}

	public String getInsight() {
		return insight;
	}

	public String getSwot() {
		return swot;
	}

	public String getUrl() {
		return url;
	}

	public String getRegion() {
		return region;
	}

	public String getStart_year() {
		return start_year;
	}

	public String getImpact() {
		return impact;
	}

	public String getAdded() {
		return added;
	}

	public String getPublished() {
		return published;
	}

	public String getCity() {
		return city;
	}

	public String getCountry() {
		return country;
	}

	public int getRelevance() {
		return relevance;
	}

	public String getPestle() {
		return pestle;
	}

	public String getSource() {
		return source;
	}

	public String getTitle() {
		return title;
	}

	public String getLikelihood() {
		return likelihood;
	} 
}
