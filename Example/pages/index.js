import { getDeviceInfo } from "@zos/device";
import hmUI from "@zos/ui";
import { log } from "@zos/utils";
import { push } from "@zos/router";
import { ZeppTimer } from "../libs/zeppos_timer";
import { Fx } from "../libs/fx";

const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = getDeviceInfo();

import { createWidget, widget, prop } from "@zos/ui";
import { Time } from "@zos/sensor";

const logger = log.getLogger("index.page");

Page({
	onCreate(e) {
		logger.log("app on create invoke");
	},
	onInit() {
		logger.log("page on init invoke");
	},
	onShow() {
		logger.log("page on show invoke");
	},
	build() {

		console.log("Device w&h : " + DEVICE_WIDTH + "x" + DEVICE_HEIGHT);
	},
	onHide() {
		logger.log("page on hide invoke");
	},
	onDestroy() {
		logger.log("page on destroy invoke");
	},
});
