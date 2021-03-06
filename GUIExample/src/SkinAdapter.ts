/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @class egret.gui.DefaultSkinAdapter
 * @classdesc
 * 默认的ISkinAdapter接口实现
 * @implements egret.gui.ISkinAdapter
 */


class SkinAdapter implements egret.gui.ISkinAdapter {
    /**
     * 构造函数
     * @method egret.gui.DefaultSkinAdapter#constructor
     */
    public constructor() {
    }

    /**
     * 获取皮肤显示对象
     * @method egret.gui.ISkinAdapter#getSkin
     * @param skinName {any} 待解析的皮肤标识符
     * @param hostComponentKey {string} 主机组件标识符
     * @returns {any} 皮肤对象实例
     */
    public getSkin(skinName:any, hostComponentKey:string):any {
        if (skinName) {
            if (skinName.prototype) {
                return new skinName();
            }
            else if (typeof(skinName) == "string") {
                var clazz:any = egret.getDefinitionByName(<string><any> skinName);
                if (clazz) {
                    return new clazz();
                }
                else {
                    return null;
                }
            }
            else {
                return skinName;
            }
        }
        return this.getDefaultSkin(hostComponentKey);
    }

    private getDefaultSkin(hostComponentKey:string):any{
        var skin:any;
        switch (hostComponentKey) {
            case "egret.gui.Button":
                skin =  "skins.ButtonSkin";
                break;
            case "egret.gui.ToggleButton":
                skin =  "skins.ToggleButtonSkin"
                break;
            case "egret.gui.Alert":
                skin =  "skins.AlertSkin";
                break;
            case "egret.gui.HSlider":
                skin =  "skins.HSliderSkin";
                break;
            case "egret.gui.VSlider":
                skin =  "skins.VSliderSkin";
                break;
            case "egret.gui.TabBar":
                skin =  "skins.TabBarSkin";
                break;
            case "egret.gui.List":
                skin =  "skins.ListSkin";
                break;
            case "egret.gui.Tree":
                skin =  "skins.TreeSkin";
                break;
            case "egret.gui.RadioButton":
                skin =  "skins.RadioButtonSkin";
                break;
            case "egret.gui.CheckBox":
                skin =  "skins.CheckBoxSkin";
                break;

        }
        skin = new (egret.getDefinitionByName(skin))();
        return skin;
    }
}
