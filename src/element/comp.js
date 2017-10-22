import * as PIXI from 'pixi.js';
import Element from './element';

export default class CompElement extends Element {
    constructor(data) {
        super(data);
        this.width        = data.w;
        this.height       = data.h;
        this.blendMode    = this.blendMode(data.bm);
        this.autoOriented = data.ao;
    }

    blendMode(mode) {
        if (!PIXI.BLEND_MODES) {
            switch (mode) {
            case 0:
                return PIXI.blendModes.NORMAL;
                break;
            case 2:
                return PIXI.blendModes.SCREEN;
                break;
            default:
                break;
            }
            return PIXI.blendModes.NORMAL;
        }
        switch(mode) {
        case 0:
            return PIXI.BLEND_MODES.NORMAL;
        case 1:
            return PIXI.BLEND_MODES.MULTI_PLY;
        case 2:
            return PIXI.BLEND_MODES.SCREEN;
        case 3:
            return PIXI.BLEND_MODES.OVERLAY;
        case 4:
            return PIXI.BLEND_MODES.DARKEN;
        case 5:
            return PIXI.BLEND_MODES.LIGHTEN;
        case 6:
            return PIXI.BLEND_MODES.COLOR_DODGE;
        case 7:
            return PIXI.BLEND_MODES.COLOR_BURN;
        case 8:
            return PIXI.BLEND_MODES.HARD_LIGHT;
        case 9:
            return PIXI.BLEND_MODES.SOFT_LIGHT;
        case 10:
            return PIXI.BLEND_MODES.DIFFERENCE;
        case 11:
            return PIXI.BLEND_MODES.EXCLUSION;
        case 12:
            return PIXI.BLEND_MODES.HUE;
        case 13:
            return PIXI.BLEND_MODES.SATURATION;
        case 14:
            return PIXI.BLEND_MODES.COLOR;
        case 15:
            return PIXI.BLEND_MODES.LUMINOSITY;
        }
        return PIXI.BLEND_MODES.NORMAL;
    }

    setupSubLayers(layers) {
        this.layers = layers;
        this.layers.forEach((layer) => {
            if (!layer) return;
            this.addChild(layer);
        });
    }
}