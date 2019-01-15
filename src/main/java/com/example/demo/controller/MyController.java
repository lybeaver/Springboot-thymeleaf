package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyController extends BaseController{
	
	public MyController() {
		super();
		// TODO Auto-generated constructor stub
	}

	@RequestMapping(value="/home")
	public String index(Model model) {
		model.addAttribute("menus", this.getMenus());
		model.addAttribute("asides", this.getAsides());
		return "home";
	}
}
