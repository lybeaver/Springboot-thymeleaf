package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CarpetController {
	@RequestMapping(value="/carpet")
	public String init() {
		return "carpets";
	}
}
