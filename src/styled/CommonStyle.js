const CommonStyle = (value) => {
    const colors = {
        "mainColor": "#3185FC",
        "subColor": "#E0E6FF",
        "borderColor": "#ADBDFF",
        "fontColor": "#222A68",
        "white": "white",
        "errorColor": "#FC3131",
    }
    
    const button = {
        "btnPadding": "3px 7px",
        "btnCursor": "pointer",
        "btnMargin": "10px",
        "btnBorderRadius":"2px",
        "btnFontSize": "13px",
        "btnWidth": "fit-content",
        "btnMarginLeft":"10px",
    }

    const input = {
        "inputBorderRadius": "5px",
        "inputWidth": "248px",
        "inputHeight": "24px",
        "inputPadding": "3px 5px",
        "inputMargin": "15px 0"
    }

    const fontSize = {
        "titleSize":"32px",
        "subTitleSize":"20px",
        "defaultSize":"13px"
    }

    const setting = {
        "margin": "10px",
        "display": "flex",
        "alignItems": "center",
        "boxSizing": "border-box"
    }

    //color
    if(value === "mainColor"){
        return colors.mainColor;
    }else if(value === "subColor"){
        return colors.subColor;
    }else if(value === "borderColor"){
        return colors.borderColor;
    }else if(value === "subColor"){
        return colors.fontColor;
    }else if(value === "white"){
        return colors.white;
    }else if(value === "errorColor"){
        return colors.errorColor;
    }

    //btn
    if(value === "btnPadding"){
        return button.btnPadding;
    }else if(value === "btnCursor"){
        return button.btnCursor;
    }else if(value === "btnMargin"){
        return button.btnMargin;
    }else if(value === "btnBorderRadius"){
        return button.btnBorderRadius;
    }else if(value === "btnFontSize"){
        return button.btnFontSize;
    }else if(value === "btnMarginLeft"){
        return button.btnMarginLeft;
    }else if(value === "btnWidth"){
        return button.btnWidth;
    }


    //input
    if(value === "inputBorderRadius"){
        return input.inputBorderRadius;
    }else if(value === "inputWidth"){
        return input.inputWidth;
    }else if(value === "inputHeight"){
        return input.inputHeight;
    }else if(value === "inputPadding"){
        return input.inputPadding;
    }else if(value === "inputMargin"){
        return input.inputMargin;
    }


    //font
    if(value === "titleSize"){
        return fontSize.titleSize;
    }else if(value === "subTitleSize"){
        return fontSize.subTitleSize;
    }else if(value === "defaultSize"){
        return fontSize.defaultSize;
    }

    if(value === "margin"){
        return setting.margin;
    }else if (value === "display"){
        return setting.display;
    }else if (value === "alignItems"){
        return setting.alignItems;
    }else if (value === "boxSizing"){
        return setting.boxSizing;
    }
}

export default CommonStyle;