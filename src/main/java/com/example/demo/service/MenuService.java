package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.Menu;
import com.example.demo.mapper.MenuMapper;

@Service
public class MenuService {

	@Autowired
	private MenuMapper menuMapper;
	public List<Menu> getMenus() {
		return menuMapper.selectMenu();
	}
}
