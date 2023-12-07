var styles = {
    body: {
        color: 'white',
        textColor: 'black',
    },
    defaultColor: {
        color: "linear-gradient(#200016 ,#10001f)",
        textColor: 'white',
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);

        if (scrollPosition > 200) {
            const element = document.getElementById('body');
            element.style.background = styles.body.color;
            element.style.color = styles.body.textColor;

        } else {
            const element = document.getElementById('body');
            element.style.background = styles.defaultColor.color;
        }
    });
});

/*
شرح


styles Object: This object holds styles for two scenarios - one for the body (styles.body) and one for the default color (styles.defaultColor).
DOMContentLoaded Event: The code waits for the DOM content to be fully loaded before executing any JavaScript. This ensures that the script doesn't run until the HTML document is ready.
Scroll Event Listener: A scroll event listener is added to the window. When the user scrolls, the provided callback function is executed.
Getting Scroll Position: The code retrieves the current vertical scroll position using window.scrollY and logs it to the console.
Conditional Check: It checks if the scroll position is greater than 200 pixels.
Updating Styles: If the scroll position is greater than 200 pixels, it updates the background and text color of the 'body' element using the styles defined in the styles.body object. If the scroll position is less than or equal to 200 pixels, it sets the background of the 'body' element to the default color defined in styles.defaultColor.
Note: The code assumes that there is an HTML element with the id 'body' that you are trying to style based on the scroll position. Make sure your HTML includes an element with that id for the script to work as intended.
*/