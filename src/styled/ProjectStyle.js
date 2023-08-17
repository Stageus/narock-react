import styled from "styled-components"
import CommonStyle from "./CommonStyle";


const Button = styled.input`
    ${props => {
        return`
            background-color:${props.backgroundColor ? props.backgroundColor: `${CommonStyle("mainColor")}`};
            padding:${props.padding ? props.padding :`${CommonStyle("btnPadding")}`};
            margin-left:${props.marginLeft ? props.marginLeft : `${CommonStyle("btnMargin")}`};
            font-size:${props.fontSize ? props.fontSize : `${CommonStyle("btnFontSize")}`};
            border-radius: ${props.borderRadius ? props.borderRadius:`${CommonStyle("btnBorderRadius")}`};
            border: ${props.border ? props.border:"none"};
            cursor: ${props.cursor ? props.cursor : `${CommonStyle("btnCursor")}`};
            display:${props.display === "none" ? "none": "inline-block"};
            color:${props.color ? props.color : `${CommonStyle("white")}`};
            width:${props.width ? props.width : `${CommonStyle("btnWidth")}`};
            height:${props.height ? props.height : `${CommonStyle("btnHeight")}`};
            margin:${props.margin ? props.margin : `${CommonStyle("btnMargin")}`};
        `
    }}
`
const Input = styled.input`
    ${props=>{
        return`
            border-radius:${props.borderRadius ? props.borderRadius : `${CommonStyle("inputBorderRadius")}`};
            border:${props.border? props.border : `1px solid ${CommonStyle("mainColor")}`};
            width:${props.width ? props.width : `${CommonStyle("inputWidth")}`};
            height:${props.height ? props.height : `${CommonStyle("inputHeight")}`};
            padding:${props.padding ? props.padding : `${CommonStyle("inputPadding")}`};
            margin:${props.margin ? props.margin : `${CommonStyle("inputMargin")}`}
             
        `
    }}
`
const Align = styled.div`
    ${props =>{
        return`
            display: ${props.display ? props.display: `${CommonStyle("display")}`};
            align-items: ${props.alignItems ? props.alignItems: `${CommonStyle("alignItems")}`};
        `
    }}
`

export { Button, Align, Input };