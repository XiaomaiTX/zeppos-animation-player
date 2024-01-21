/**
 * animations.js
 * @description 动画的预设与脚本
 *
 * @example
 *
 * TODO: 待补充
 *
 * 创建动画轨道 TRACK_1 = { startTime: 0, frames: [{ frame1 }, { frame2 }] };
 *
 * 创建轨道内的单个关键帧
 * frame1 = {
	delay: 0, // 延迟执行（可选）
	style: Fx.Styles.EASE_IN_OUT_QUAD, // 动画类型（可选）
	fps: 60, // 动画帧率（可选）
	time: 1, // 动画时间（可选）
	begin: {}, // 起始位置
	end: {}, //	结束位置
	init_func: (params) => {}, // 动画初始化
	duration_func: (percent, begin, end, params) => {}, // 动画过程
	end_func: (params) => {}, // 动画结束
};

 *
 */
import { Fx, lerp } from "../libs/zeppos-animation-player";
import * as hmUI from "@zos/ui";

export const TRACK_1 = {
	startTime: 0,
	frames: [
		{
			delay: 0,
			style: Fx.Styles.EASE_IN_OUT_QUAD,
			fps: 60,
			time: 1,
			begin: {
				radius: px(0),
			},
			end: {
				radius: px(240),
			},
			init_func: (params) => {
				console.log("t1 f1");
				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0x69f0ae,
					alpha: px(150),
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0x69f0ae,
					alpha: px(150),
				});
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			style: Fx.Styles.EASE_IN_OUT_QUAD,
			fps: 60,
			time: 1,
			begin: {
				radius: px(240),
			},
			end: {
				radius: px(0),
			},
			init_func: (params) => {
				console.log("t1 f2");
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0x69f0ae,
					alpha: px(150),
				});
			},
			end_func: (params) => {},
		},
	],
};
export const TRACK_2 = {
	startTime: 1,
	frames: [
		{
			begin: {
				radius: px(0),
			},
			end: {
				radius: px(240),
			},
			init_func: (params) => {
				console.log("t2 f1");
				const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
					center_x: px(240),
					center_y: px(240),
					radius: px(0),
					color: 0xffffff,
					alpha: px(150),
				});
				return circle;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0xffffff,
					alpha: px(150),
				});
			},
			end_func: (params) => {
				return params;
			},
		},
		{
			delay: 1,
			begin: {
				radius: px(240),
			},
			end: {
				radius: px(0),
			},
			init_func: (params) => {
				console.log("t2 f2");
				return params;
			},
			duration_func: (percent, begin, end, params) => {
				params.setProperty(hmUI.prop.MORE, {
					center_x: px(240),
					center_y: px(240),
					radius: lerp(begin.radius, end.radius, percent),
					color: 0xffffff,
					alpha: px(150),
				});
			},
			end_func: (params) => {},
		},
	],
};
