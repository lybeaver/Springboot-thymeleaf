package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.Commodity;
import com.example.demo.mapper.CommodityMapper;

@Service
public class CommodityService {
	@Autowired
	private CommodityMapper commodityMapper;
	/**
	 * 相册一览
	 * @return
	 */
	public List<Commodity> getCommodities() {
		List<Commodity> commodityList = commodityMapper.selectCommodity();
		return commodityList;
	}
	/**
	 * 添加相册
	 * @param commodity
	 * @param originalImages
	 */
	public void addCommodity(Commodity commodity, String[] originalImages) {
		String parentUuid = UUID.randomUUID().toString();
		commodity.setId(parentUuid);
		if (originalImages != null && originalImages.length > 0) {
			commodity.setActiveImageUrl(originalImages[0]);
		}
		int parentKey =  commodityMapper.addCommodity(commodity);
		System.out.println(parentUuid);
		if (parentKey > 0 && originalImages != null && originalImages.length > 0) {
			for(String original:originalImages) {
				String childUuid = UUID.randomUUID().toString();
				Commodity comm = new Commodity();
				comm.setId(childUuid);
				comm.setOriginalImageUrl(original);
				comm.setParentId(parentUuid);
				commodityMapper.addCommodity(comm);
			}
		}
	}
}
