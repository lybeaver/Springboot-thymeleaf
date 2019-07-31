package com.example.demo.dto;

import java.io.Serializable;

public class Commodity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String id;
	
	private String name;
	
	private String originalImageUrl;
	
	private String parentId;
	
	private String activeImageUrl;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOriginalImageUrl() {
		return originalImageUrl;
	}

	public void setOriginalImageUrl(String originalImageUrl) {
		this.originalImageUrl = originalImageUrl;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getActiveImageUrl() {
		return activeImageUrl;
	}

	public void setActiveImageUrl(String activeImageUrl) {
		this.activeImageUrl = activeImageUrl;
	}

}
