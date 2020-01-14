package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.example.demo.dto.Commodity;

@Mapper
public interface CommodityMapper {
	@Select("select * from commodity where parent_id = '' or parent_id is null")
	@Results({
			@Result(property="id",column="id"),
			@Result(property="name",column="name"),
			@Result(property="originalImageUrl",column="original_image_url"),
			@Result(property="parentId",column="parent_id"),
			@Result(property="activeImageUrl",column="active_image_url")
	})
	public List<Commodity> selectCommodity();
		
	@Select("select * from commodity where parent_id = #{id}")
	@Results({
			@Result(property="id",column="id"),
			@Result(property="name",column="name"),
			@Result(property="originalImageUrl",column="original_image_url"),
			@Result(property="parentId",column="parent_id"),
			@Result(property="activeImageUrl",column="active_image_url")
	})
	public List<Commodity> selectCommodityByParentId(@Param("id") String id);
	
	@Insert("insert into commodity(id,name,original_image_url,parent_id,active_image_url) values(#{id}, #{name}, #{originalImageUrl}, #{parentId}, #{activeImageUrl})")
	//@Options(useGeneratedKeys=true,keyProperty="id") id自动增加的时候使用
	public int addCommodity(Commodity commodity);
	
	@Delete("delete from commodity where id = #{id} or parent_id = #{id} ")
	public int deleteCommodity(@Param("id") String id);
}
