function randompickerbtn() {
    const randomPicker = document.getElementById('randomPicker');
    const randomValue = document.getElementById('randomValuePara');
    const arr = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + arr[Math.round(Math.random() * 15)];
    }
    randomPicker.style.backgroundColor = hexCode;
    randomValue.innerText = hexCode;
}

function hexFindbtn() {
    const input = document.getElementById('hexInput').value;
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = input;
}

function RGBFindbtn() {
    const RInput = document.getElementById('RInput').value;
    const GInput = document.getElementById('GInput').value;
    const BInput = document.getElementById('BInput').value;
    const rgbColorBox = document.getElementById('rgb-color-box');
    rgbColorBox.style.backgroundColor = `rgb(${RInput}, ${GInput}, ${BInput})`;
}

function RangeSelector() {
    const r = document.getElementById('RrInput').value;
    const g = document.getElementById('GrInput').value;
    const b = document.getElementById('BrInput').value;
    const rangeColorBox = document.getElementById('range-color-box');
    console.log(`rgb(${r}, ${g}, ${b})`);
    rangeColorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function (hex) {
    if(hex.length == 4){
        let r = hex.slice(1, 2);
        let g = hex.slice(2, 3);
        let b = hex.slice(3, 4);
        r = parseInt(r+r, 16);
        g = parseInt(g+g, 16);
        b = parseInt(b+b, 16);
        return `rgb(${r}, ${g}, ${b})`;
    }else{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
};

function hexConvbtn() {
    let input = document.getElementById('hexCInp').value;
    const output = document.getElementById('hexCOut');
    input = '#'+input;
    const rgb = input.convertToRGB(input);
    output.innerText = rgb;
}

function rgbConvbtn() {
    const r = document.getElementById('RCInput').value;
    const g = document.getElementById('GCInput').value;
    const b = document.getElementById('BCInput').value;
    const output = document.getElementById('rgbCOut')

    const rgb = [parseInt(r), parseInt(g), parseInt(b)];
    let hex = "#";
    rgb.forEach((color) => {
        let hexVal = color.toString(16);  // This conver normal value to hex value
        hexVal = hexVal.length == 1 ? "0" + hexVal : hexVal;
        hex += hexVal;
    });
    output.innerText = hex;
}