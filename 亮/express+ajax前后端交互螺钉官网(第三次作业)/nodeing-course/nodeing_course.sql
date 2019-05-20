/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : nodeing_course

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2019-05-20 10:26:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(255) NOT NULL,
  `course_url` varchar(255) NOT NULL,
  `course_class` varchar(255) NOT NULL,
  `course_num` int(11) NOT NULL,
  `course_status` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('13', 'js面向对象及组件开发', '/mobile', '移动开发', '0', '更新中');
INSERT INTO `course` VALUES ('9', 'html,css,js', '/foundation', '零基础入门', '299', '完结');
INSERT INTO `course` VALUES ('10', 'vue基础入门', '/progress', '进阶实战', '230', '完结');
INSERT INTO `course` VALUES ('11', 'html5详解', '/senior', '高级修炼', '24', '更新中');
INSERT INTO `course` VALUES ('12', 'React最佳入门实践', '/strengthen', '战力强化', '2', '更新中');
INSERT INTO `course` VALUES ('14', 'python最佳入门实践', '/fullstack', 'python全栈', '2', '');

-- ----------------------------
-- Table structure for courseclass
-- ----------------------------
DROP TABLE IF EXISTS `courseclass`;
CREATE TABLE `courseclass` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `sort` int(12) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courseclass
-- ----------------------------
INSERT INTO `courseclass` VALUES ('1', '零基础入门', '/foundation', '1', '0', '/files/system/2018/01-19/15203538a67c790333.png', 'html,css,js');
INSERT INTO `courseclass` VALUES ('6', '进阶实战', '/progress', '2', '0', '/files/system/2018/01-19/15203538a67c790333.png', 'js面向对像及组件开发');
INSERT INTO `courseclass` VALUES ('7', '高级修炼', '/senior', '3', '0', '/files/system/2018/01-19/15203538a67c790333.png', 'vue入门基础');
INSERT INTO `courseclass` VALUES ('8', '战力强化', '/strengthen', '4', '0', '', 'html5详解');
INSERT INTO `courseclass` VALUES ('9', '移动开发', '/mobile', '5', '0', '', 'React最佳入门');
INSERT INTO `courseclass` VALUES ('10', 'python全栈', '/fullstack', '6', '0', '', 'Python最佳入门实践');

-- ----------------------------
-- Table structure for link
-- ----------------------------
DROP TABLE IF EXISTS `link`;
CREATE TABLE `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link_name` varchar(255) NOT NULL,
  `link_url` varchar(255) NOT NULL,
  `link_sort` int(12) NOT NULL,
  `link_description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of link
-- ----------------------------
INSERT INTO `link` VALUES ('15', '会员', '', '3', '会员');
INSERT INTO `link` VALUES ('16', '常见问题', '', '4', '常见问题');
INSERT INTO `link` VALUES ('14', '资料下载', '', '2', '资料下载');
INSERT INTO `link` VALUES ('17', 'QQ交流群', '', '5', 'QQ交流群');
INSERT INTO `link` VALUES ('13', '学习路线', '', '1', '学习路线');

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nav_name` varchar(255) NOT NULL,
  `nav_url` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('2', '首页', '/', '0');
INSERT INTO `nav` VALUES ('5', '学习路线', 'http://nodeing.com/class', '0');
INSERT INTO `nav` VALUES ('6', '会员', 'http://edu.nodeing.com/vip/', '0');
INSERT INTO `nav` VALUES ('9', '转行就业班', 'http://nodeing.com/zs', '0');

-- ----------------------------
-- Table structure for system_config
-- ----------------------------
DROP TABLE IF EXISTS `system_config`;
CREATE TABLE `system_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `web_title` varchar(255) NOT NULL,
  `web_subheading` varchar(255) NOT NULL,
  `web_description` varchar(255) NOT NULL,
  `web_log` varchar(255) NOT NULL,
  `web_email` varchar(255) NOT NULL,
  `web_code_log` varchar(255) NOT NULL,
  `web_copyright` varchar(255) NOT NULL,
  `web_beAn` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of system_config
-- ----------------------------
INSERT INTO `system_config` VALUES ('2', '螺钉课堂', '螺钉课堂', '这是一个前端开发自学视屏网站', '', '', '', '课程内容版权归螺钉课堂所有', '蜀ICP备15031208号-3');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(41) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `role` varchar(16) NOT NULL,
  `create_time` bigint(13) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('148', '17421082@qq.com', 'admin2', '12345678', '0', '', '1557409230710');
