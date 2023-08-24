import styled from "styled-components"
import CommonStyle from "./CommonStyle";


const Button = styled.input`
    ${props => {
        return`
            background-color:${props.backgroundcolor ? props.backgroundcolor: `${CommonStyle("mainColor")}`};
            padding:${props.padding ? props.padding :`${CommonStyle("btnPadding")}`};
            font-size:${props.fontSize ? props.fontSize : `${CommonStyle("btnFontSize")}`};
            border-radius: ${props.borderradius ? props.borderradius:`${CommonStyle("btnBorderRadius")}`};
            border: ${props.border ? props.border:"none"};
            cursor: ${props.cursor ? props.cursor : `${CommonStyle("btnCursor")}`};
            display:${props.display === "none" ? "none": "inline-block"};
            color:${props.color ? props.color : `${CommonStyle("white")}`};
            width:${props.width ? props.width : `${CommonStyle("btnWidth")}`};
            height:${props.height ? props.height : `${CommonStyle("btnHeight")}`};
            margin:${props.margin ? props.margin : `${CommonStyle("btnMargin")}`};
            margin-left:${props.marginleft ? props.marginleft : `${CommonStyle("btnMarginLeft")}`};
            text-align:${props.textAlign ? props.textAlign : 'center'};
        `
    }}
`
const Input = styled.input`
    ${props=>{
        return`
            border-radius:${props.borderradius ? props.borderradius : `${CommonStyle("inputBorderRadius")}`};
            border:${props.border? props.border : `1px solid ${CommonStyle("mainColor")}`};
            width:${props.width ? props.width : `${CommonStyle("inputWidth")}`};
            height:${props.height ? props.height : `${CommonStyle("inputHeight")}`};
            padding:${props.padding ? props.padding : `${CommonStyle("inputPadding")}`};
            margin:${props.margin ? props.margin : `${CommonStyle("inputMargin")}`};
            margin-right:${props.marginright ? props.marginright : `${CommonStyle("inputMarginright")}`};
        `
    }}
`
const Align = styled.div`
    ${props =>{
        return`
            display: ${props.display ? props.display: `${CommonStyle("display")}`};
            align-items: ${props.alignItems ? props.alignItems: `${CommonStyle("alignItems")}`};
            position: ${props.position ? props.position: `${CommonStyle("position")}`};
        `
    }}
`

const Error = styled.div`
    ${props =>{
        return`
            color: ${props.color ? props.color: `${CommonStyle("errorColor")}`};
            right: ${props.right ? props.right: '-100px'};
        `
    }}
`
const Success = styled.div`
    ${props =>{
        return`
            color: ${props.color ? props.color: `${CommonStyle("mainColor")}`};
        `
    }}
`
export { Button, Align, Input, Error, Success };