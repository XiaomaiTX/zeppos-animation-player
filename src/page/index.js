import { getText } from "@zos/i18n";
import * as Styles from "zosLoader:./index.[pf].layout.js";
import * as hmUI from "@zos/ui";
import { ZeppAnim } from "../libs/zeppos-animation-player";
import * as ANIM_STYLE from "./animations";

Page({
	build() {
		new ZeppAnim({
			tracks: [ANIM_STYLE.TRACK_1, ANIM_STYLE.TRACK_2],
		});
	},
});
