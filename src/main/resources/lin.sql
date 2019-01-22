/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : lin

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-01-22 17:18:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `carpets`
-- ----------------------------
DROP TABLE IF EXISTS `carpets`;
CREATE TABLE `carpets` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `model_id` bigint(20) NOT NULL,
  `size` varchar(100) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `create_user_id` bigint(20) NOT NULL,
  `update_user_id` bigint(20) NOT NULL,
  `del_flg` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carpets
-- ----------------------------

-- ----------------------------
-- Table structure for `menu`
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `type` int(11) NOT NULL,
  `url` varchar(40) NOT NULL,
  `menu_level` int(11) NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '菜单一', '1', '/menu1', '1', '0', '1');
INSERT INTO `menu` VALUES ('2', '菜单二', '1', '/menu2', '1', '0', '2');
INSERT INTO `menu` VALUES ('3', '侧面1', '2', '/aside1', '1', '0', '1');
INSERT INTO `menu` VALUES ('4', '侧面2', '2', '/aside2', '1', '0', '2');
INSERT INTO `menu` VALUES ('5', '侧面3', '2', '/aside3', '1', '0', '3');
INSERT INTO `menu` VALUES ('6', '侧面4', '2', '/aside4', '1', '0', '4');
INSERT INTO `menu` VALUES ('7', '侧面5', '2', '/aside5', '1', '0', '5');

-- ----------------------------
-- Table structure for `models`
-- ----------------------------
DROP TABLE IF EXISTS `models`;
CREATE TABLE `models` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `create_user_id` bigint(20) NOT NULL,
  `update_user_id` bigint(20) NOT NULL,
  `del_flg` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of models
-- ----------------------------

-- ----------------------------
-- Table structure for `pictures`
-- ----------------------------
DROP TABLE IF EXISTS `pictures`;
CREATE TABLE `pictures` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `carpet_id` bigint(20) NOT NULL,
  `url` varchar(100) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `create_user_id` bigint(20) NOT NULL,
  `update_user_id` bigint(20) NOT NULL,
  `del_flg` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pictures
-- ----------------------------

-- ----------------------------
-- Table structure for `t_permission`
-- ----------------------------
DROP TABLE IF EXISTS `t_permission`;
CREATE TABLE `t_permission` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `permission_name` varchar(45) NOT NULL,
  `permission_lable` varchar(45) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_permission
-- ----------------------------

-- ----------------------------
-- Table structure for `t_resource`
-- ----------------------------
DROP TABLE IF EXISTS `t_resource`;
CREATE TABLE `t_resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `resource_name` varchar(45) NOT NULL,
  `resource_lable` varchar(45) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_resource
-- ----------------------------

-- ----------------------------
-- Table structure for `t_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role
-- ----------------------------

-- ----------------------------
-- Table structure for `t_role_resource_permission`
-- ----------------------------
DROP TABLE IF EXISTS `t_role_resource_permission`;
CREATE TABLE `t_role_resource_permission` (
  `role_id` bigint(20) NOT NULL,
  `resource_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role_resource_permission
-- ----------------------------

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `telephone` varchar(11) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `login_name` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `birthday` date NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1001', 'tomcat', '15523456788', '1', 'tomcat2', '123456', '2018-10-31', '2018-09-25 13:22:46', '2018-11-20 17:09:54', '1001', '1001', '6', '0');
INSERT INTO `t_user` VALUES ('1002', 'ljq', '15523456788', '1', 'xyzasd', '123456', '2018-10-31', '2018-10-31 14:15:48', '2018-11-20 17:31:59', '1001', '1001', '23', '0');
INSERT INTO `t_user` VALUES ('1003', 'admin', '18888888888', '1', 'admin', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-13', '2018-11-13 13:43:37', '2018-11-13 14:25:13', '1001', '1001', '1', '0');
INSERT INTO `t_user` VALUES ('1004', 'test', '17888888888', '1', 'test', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-13', '2018-11-13 14:08:18', '2018-11-13 14:08:18', '1001', '1001', '0', '0');
INSERT INTO `t_user` VALUES ('1005', 'cece', '15523456788', '1', 'tomcat2', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-10-31', '2018-11-13 14:24:30', '2018-11-19 15:03:33', '1001', '1001', '3', '0');
INSERT INTO `t_user` VALUES ('1006', '测试下拉菜单2', '17888888888', '1', 'ceshi', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-13', '2018-11-13 15:39:15', '2018-11-13 17:06:13', '1001', '1001', '2', '0');
INSERT INTO `t_user` VALUES ('1007', '测试下拉菜单3', '17896969696', '1', 'test3', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-13', '2018-11-13 16:24:12', '2018-11-14 11:30:57', '1001', '1001', '7', '0');
INSERT INTO `t_user` VALUES ('1008', '小小', '15812345678', '0', 'sushi', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-19', '2018-11-19 17:09:20', '2018-11-19 17:09:20', '1001', '1001', '0', '0');
INSERT INTO `t_user` VALUES ('1009', '小小2', '19612345678', '1', 'zara', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-20', '2018-11-20 16:18:48', '2018-11-20 18:06:15', '1001', '1001', '2', '0');
INSERT INTO `t_user` VALUES ('1010', 'tens', '17812345678', '0', 'papa', 'Sy93OjPDF5vwNrkTfL9AyA==', '2018-11-20', '2018-11-20 17:32:58', '2018-11-20 17:32:58', '1001', '1001', '0', '0');

-- ----------------------------
-- Table structure for `t_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_user_role`;
CREATE TABLE `t_user_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_by_id` bigint(20) NOT NULL,
  `update_by_id` bigint(20) NOT NULL,
  `counts` bigint(20) NOT NULL DEFAULT '0',
  `delete_flg` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_role
-- ----------------------------
