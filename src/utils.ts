interface ObjectLiteral {
    [key: string]: any;
}

const colors: ObjectLiteral = {
    primary: "#36393f",
    secondary: "#2f3136",
    tertiary: "rgb(32,34,37)",
    quaternary: "#292b2f",
    quinary: "#393d42",
    senary: "#828386",
    white: "#fff",
    gray: "#8a8c90",
    "chat-input": "rgb(64,68,75)",
    symbol: "#74777a",
    notification: "#f84a4b",
    discord: "#6e86d6",
    "mention-detail": "#f9a839",
    "mention-message": "#413f3f",
    link: "#5d80d6",
    rocketseat: "#6633cc",
}

function lumiance(hex: string, luminosity: number = 0): string {
    
    let rgb = "";

    function cleanHex() {
        const isCSSVar = /^--/.test(hex)

        if(isCSSVar) {
            hex = colors[hex.replace("--", "")]
        }

        hex = hex.replace(/[^0-9a-f]/gi, '');
    }

    function isValidHex() {
        const isSixCharHex = hex.length === 6
        const isThreeCharHex = hex.length === 3

        if((!isSixCharHex && !isThreeCharHex)) {
            throw new Error("Invalid hex color: " + hex);
        }
        
        return true;
    }

    function formatSixDigitHex() {
        if(hex.length === 3) {
            hex = hex
                .split("")
                .reduce( (final, char) => final + char, "")
        } 
    }
  
    cleanHex()
    isValidHex()
    formatSixDigitHex()
  
    
    for (let i = 0; i < 3; i++) {
      const nextTwoDigitFromHex = hex.substr(i*2,2);
      const numericValueFromHex = parseInt(nextTwoDigitFromHex, 16);
      const addLuminosityToNumericValue = numericValueFromHex + (numericValueFromHex * luminosity)
      const minValue = Math.max(0, addLuminosityToNumericValue)
      const maxValue = Math.min(minValue, 255)
      const roundNumber = Math.round(maxValue)
      const fromNumericToHexString = roundNumber.toString(16)

      const formatValueWhenLessThenTwoDigits = ("00" + fromNumericToHexString).substr(fromNumericToHexString.length)
      const formatedValue = formatValueWhenLessThenTwoDigits
      rgb += formatedValue
    }

    return `#${rgb}`;
}

export { 
    lumiance,
    colors
}