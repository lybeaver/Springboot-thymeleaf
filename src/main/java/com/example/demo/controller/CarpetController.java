package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.example.demo.dto.Commodity;
import com.example.demo.dto.CommodityImages;
import com.example.demo.service.CommodityService;

@Controller
@RequestMapping(value="/carpet")
public class CarpetController {

	@Autowired
	private CommodityService commodityService;
	/**
	 * 商品一览
	 * @return
	 */
	@RequestMapping(value="/list")
	public String init(Model model) {
		List<Commodity> list = commodityService.getCommodities();
		String json = "";
		if (!CollectionUtils.isEmpty(list)) {
			json = JSONObject.toJSONString(list,SerializerFeature.WriteNullStringAsEmpty);
		}
		model.addAttribute("items", json);
		return "carpets";
	}
	
	/**
	 * 上传图片
	 */
	// @RequestMapping(value="/upload",method=RequestMethod.POST)
	@PostMapping(value="/upload")
	@ResponseBody
	// public String fileUpload(Commodity commodity, @RequestParam(value="file",required=false) MultipartFile[] file, HttpServletRequest request) throws Exception{
	public String fileUpload(@RequestParam("file") List<MultipartFile> file) {
		// String pathRoot = request.getSession().getServletContext().getRealPath("");
		String pathRoot = "D:/workspace-sts/demo/src/main/resources";
		String path = "";
		String originalImageUrl = "";
		List<String> listImagePath = new ArrayList<String>();
		System.out.println("length:"+file.size());
		 try {
			for (MultipartFile mf : file) {
				if(!mf.isEmpty()) {
					// 生成uuid作为文件名称
					String uuid = UUID.randomUUID().toString().replaceAll("-","");
					// 获得文件类型（可以判断如果不是图片，禁止上传）
					String contentType = mf.getContentType();
					// 获得文件后缀名称
					String imageName = contentType.substring(contentType.indexOf("/")+1);
					path = "/static/img/"+uuid+"."+imageName;
					originalImageUrl = uuid+"."+imageName;
					mf.transferTo(new File(pathRoot+path));
					listImagePath.add(originalImageUrl);
				}
			}
		} catch(IOException e) {
			e.printStackTrace();
			return "error";
		}
		System.out.println(path);
		// request.setAttribute("imagesPathList", listImagePath);
		return originalImageUrl;
	}	
	
	@PostMapping(value = "/saveCommodity")
	@ResponseBody
	public String saveCommodity(@RequestBody CommodityImages commodityImage) throws Exception{
		System.out.println(commodityImage.getName());
	//	System.out.println("length:"+originalImages.length);
		Commodity commodity = commodityImage;
		commodityService.addCommodity(commodity, commodityImage.getOriginalImages());
		return "success";
	}
}
