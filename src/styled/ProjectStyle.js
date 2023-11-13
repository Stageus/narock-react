
import styled from "styled-components"
import CommonStyle from "./CommonStyle";


const Button = styled.input.attrs((props) => ({
    readOnly: props.readOnly,
    type: "button",
  }))`
    ${(props) => {
      return `
        background-color:${props.backgroundcolor ? props.backgroundcolor : `${CommonStyle("mainColor")}`};
        padding:${props.padding ? props.padding : `${CommonStyle("btnPadding")}`};
        font-size:${props.fontSize ? props.fontSize : `${CommonStyle("btnFontSize")}`};
        border-radius: ${props.borderradius ? props.borderradius : `${CommonStyle("btnBorderRadius")}`};
        border: ${props.border ? props.border : "none"};
        cursor: ${props.cursor ? props.cursor : `${CommonStyle("btnCursor")}`};
        display:${props.display === "none" ? "none" : "inline-block"};
        color:${props.color ? props.color : `${CommonStyle("white")}`};
        width:${props.width ? props.width : `${CommonStyle("btnWidth")}`};
        height:${props.height ? props.height : `${CommonStyle("btnHeight")}`};
        margin:${props.margin ? props.margin : `${CommonStyle("btnMargin")}`};
        margin-left:${props.marginleft ? props.marginleft : `${CommonStyle("btnMarginLeft")}`};
        text-align:${props.textAlign ? props.textAlign : 'center'};
        
      `;
    }}
  `;

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
            font-size:${props.fontSize ? props.fontSize : `${CommonStyle("inputFontSize")}`};
            
        `
    }}
`
const Align = styled.div`
    ${props =>{
        return`
            display: ${props.display ? props.display: `${CommonStyle("display")}`};
            align-items: ${props.alignitems ? props.alignitems: `${CommonStyle("alignItems")}`};
            position: ${props.position ? props.position: `${CommonStyle("position")}`};
        `
    }}
`

const Error = styled.span`
    ${props =>{
        return`
            color: ${props.color ? props.color: `${CommonStyle("errorColor")}`};
            right: ${props.right ? props.right: '-100px'};
            margin: ${props.margin ? props.margin : '5px'};
        `
    }}
`
const Success = styled.span`
    ${props =>{
        return`
            color: ${props.color ? props.color: `${CommonStyle("mainColor")}`};
            margin: ${props.margin ? props.margin : '5px'};
        `
    }}
`

const Title = styled.div`
    ${props => {
        return`
            background-color: ${props.backgroundcolor? props.backgroundcolor: `${CommonStyle("subColor")}`};
            font-size: 32px;
            color: ${props.color ? props.color: `${CommonStyle("mainColor")}`};
            margin-bottom: 25px;
            padding:10px 0;
            width:100%;
            `
    }}
`

const Div = styled.div`
    ${props => {
        return`
        // background-color: ${props.backgroundcolor? props.backgroundcolor: `${CommonStyle("white")}`};
        display: ${props.display ? props.display: `${CommonStyle("display")}`};
        align-items: ${props.alignitems ? props.alignitems: `${CommonStyle("alignitems")}`};
        justify-content: ${props.justifycontent ? props.justifycontent: `${CommonStyle("justifyContent")}`};
        position: ${props.position ? props.position: `${CommonStyle("position")}`};
        color: ${props.color ? props.color: `${CommonStyle("fontColor")}`};
        margin: ${props.margin ? props.margin: 0};
        padding: ${props.padding ? props.padding: `${CommonStyle("padding")}`};
        flex-direction: ${props.flexdirection ? props.flexdirection: `${CommonStyle("flexDirection")}`};
        border: ${props.border ? props.border: `${CommonStyle("border")}`};
        border-bottom: ${props.borderbottom ? props.borderbottom: `${CommonStyle("borderBottom")}`};
        width: ${props.width ? props.width: `${CommonStyle("width")}`};
        height: ${props.height ? props.height: `${CommonStyle("height")}`};
        background-color: ${props.backgroundColor ? props.backgroundColor: `${CommonStyle("backgroundColor")}`};
        font-size: ${props.fontSize ? props.fontSize: `${CommonStyle("defaultSize")}`};
        position: ${props.backgroundcolor ? props.backgroundcolor: `${CommonStyle("position")}`};
        border-radius: ${props.borderRadius ? props.borderRadius: `${CommonStyle("borderRadius")}`};
        top: ${props.top ? props.top: `${CommonStyle("top")}`};
        left: ${props.left ? props.left: `${CommonStyle("left")}`};
        `
    }}
`


const MyPageBox = styled(Align)`
    flex-direction:column;
    margin:30px 160px;
    border:1px solid #E2E8FF;
`

export { Button, Align, Input, Error, Success, Title, MyPageBox, Div };