package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.example.demo.dto.Menu;
@Mapper
public interface MenuMapper {
	@Select("select * from menu")
	@Results({
			@Result(property="id",column="id"),
			@Result(property="name",column="name"),
			@Result(property="type",column="type"),
			@Result(property="url",column="url"),
			@Result(property="menuLevel",column="menu_level"),
			@Result(property="parentId",column="parent_id"),
			@Result(property="order",column="order")
	})
	public List<Menu> selectMenu();
}
