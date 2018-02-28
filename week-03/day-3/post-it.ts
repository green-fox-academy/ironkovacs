// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  public background: string;
  public text: string;
  public textColor: string;
  
  constructor(background, text, textColor) {
    this.background = background;
    this.text = text;
    this.textColor = textColor;
  }
}

let postIt1 = new PostIt('orange', 'Idea1', 'blue');
console.log(postIt1.text)

let postIt2 = new PostIt('pink', 'Awesome', 'black');
console.log(postIt2.textColor)

let postIt3 = new PostIt('yellow', 'Superb', 'green');
console.log(postIt3)