package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.demo.dto.Menu;
import com.example.demo.service.MenuService;
@Controller
public class BaseController {
	
	@Autowired
	private MenuService menuService;
	public List<Menu> getMenus() {
		List<Menu> menus = new ArrayList<Menu>();
		List<Menu> list = menuService.getMenus();
		for (Menu bean:list) {
			if (bean.getType() == 1) {
				menus.add(bean);
			} 
		}
		return menus;
	}
	public List<Menu> getAsides() {
		List<Menu> list = menuService.getMenus();
		List<Menu> asides = new ArrayList<Menu>();
		for (Menu bean:list) {
			if (bean.getType() == 2) {
				asides.add(bean);
			}
		}
		return asides;
	}
	
}
