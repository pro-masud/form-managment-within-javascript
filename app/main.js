// heading all element get value here now

// get heading value 
const headingInput = document.querySelector(".heading input");
const headColor = document.querySelector(".heading input.color");
const size = document.querySelector(".heading input.textsize");
const getFont = document.querySelector(".heading span.getfont");
const textPosiction = document.querySelector(".heading select#alignMent");
const fontff = document.querySelector(".heading select#fontff");

const h2 = document.querySelector(".section-title h2");


    headingInput.oninput = (e) => {

        h2.innerHTML = e.target.value;
    }

    headColor.oninput = (e) => {

        const color = e.target.value;
        h2.style.color = `${color}`;
    }

    size.oninput = (e) => {
        
        const font = e.target.value;
        getFont.innerHTML = font;
        h2.style.fontSize = `${font}px`;
    }

    textPosiction.oninput = (e) => {
        
        const textlcr = e.target.value;
        h2.style.textAlign = `${textlcr}`;
    }

    fontff.oninput = (e) => {
        
        const textfont = e.target.value;
        h2.style.fontFamily = `${textfont}`;
    }


    // descritpion get value

    const textarea = document.querySelector(".description textarea");
    const descColor = document.querySelector(".description input.dscColor");
    const textsize = document.querySelector(".description input.destext");
    const gettext = document.querySelector(".description span.gettext");
    const alignMent = document.querySelector(".description select#alignMent");
    const fontFamliy = document.querySelector(".description select#fontFamliy");
   
    const p = document.querySelector(".section-title p");

    textarea.oninput = (e) => {
        p.innerHTML = e.target.value;
    }

    descColor.oninput = (e) => {
        const color = e.target.value;

        p.style.color = `${color}`;
    }

    textsize.oninput = (e) => {
        const font = e.target.value;
        gettext.innerHTML = font;
        p.style.fontSize = `${font}px`;
    }

    alignMent.oninput = (e) => {
        const align = e.target.value;

        p.style.textAlign = `${align}`;
    }

    fontFamliy.oninput = (e) => {
        const fontFamliy = e.target.value;

        p.style.fontFamily = `${fontFamliy}`;
    }