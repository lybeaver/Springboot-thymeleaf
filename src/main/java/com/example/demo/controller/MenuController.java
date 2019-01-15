package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/home")
public class MenuController extends BaseController{
	
	@RequestMapping(value="/menu1")
	public String showMenu1(Model model) {
		model.addAttribute("menus", this.getMenus());
		model.addAttribute("asides", this.getAsides());
		return "home/menu1";
	}
	
	@RequestMapping(value="/menu2")
	public String showMenu2(Model model) {
		model.addAttribute("menus", this.getMenus());
		model.addAttribute("asides", this.getAsides());
		return "home/menu2";
	}
}	
