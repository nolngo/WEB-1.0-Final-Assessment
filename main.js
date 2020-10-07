// The headline element
const display = document.querySelector("#display")
// The input field for size
const inputSize = document.querySelector("#font-size")
// The element that displays the value 
const showSize = document.querySelector("#show-size")
// Repeat this for the input and "show" elements

const selectFont = document.querySelector("#select-font")

const showFont = document.querySelector("#show-font")

const inputColor = document.querySelector("#input-color")

const showColor = document.querySelector("#show-color")

const inputBgcolor = document.querySelector("#input-bg-color")

const showBgColor = document.querySelector("#show-bg-color")

const enterText = document.querySelector("#enter-text")


inputSize.addEventListener("input", handleInput)

selectFont.addEventListener("input", handleInputFont)

inputColor.addEventListener("input", handleInputColor)

inputBgcolor.addEventListener("input", handleInputBgColor)

enterText.addEventListener("input", handleInputText)



function handleInput() {
	// get the font size:
	const fontSize = inputSize.value + "px"
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}


function handleInputFont() {
	// get the font family:
	const fontFamily = selectFont.value
	// Set the style 
	display.style.fontFamily = fontFamily
	// Show the font family
	showFont.innerHTML = fontFamily
}



function handleInputColor() {
	// get the font color:
	const fontColor = inputColor.value
	// Set the style 
	display.style.color = fontColor
	// Show the font color
	showColor.innerHTML = fontColor
}


function handleInputBgColor() {
	// get the background color:
	const bgColor = inputBgcolor.value
	// Set the style 
	display.style.backgroundColor = bgColor
	// Show the background color
	showBgColor.innerHTML = bgColor
}


function handleInputText() {
	// get the font size:
	const textArea = enterText.value
	// Set the style 
	display.innerHTML = textArea
}