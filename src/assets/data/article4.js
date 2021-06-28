/* eslint-disable max-len */

const article = {
  name: ' HTML & CSS',
  summary: 'I will give some basic rules of writing HTML and CSS here.',
  content: '<p>Md Junaed Hossain <p/> <p>Date- May 30,2021 <p/> <p>HTML represents Hyper Text Markup Language. HTML is the standard markup language for making Website pages. HTML depicts the design of a Page. HTML comprises a progression of components. HTML components advise the program on how to show the substance. Technically, HTML is a programming language. <p/> <p>HTML Tags: <p/> <p>HTML tags are like keywords which defines that how web browser will format and display the content. With the help of tags, a web browser can distinguish between an HTML content and a simple content. HTML tags contain three main parts: opening tag, content and closing tag. <p/> <p>Syntax: <p/> <p><tag> content </tag> <p/> <p>Let\'s see a simple example of HTML. <p/> <p><!DOCTYPE> <p/> <p><html> <p/> <p><head> <p/> <p><title>Web page title</title> <p/> <p></head> <p/> <p><title>Web page title</title> <p/> <p></head> <p/> <p><body> <p/> <p><h1>Write Your First Heading</h1> <p/> <p></body> <p/> <p></html> <p/> <p>Description of HTML Example: <p/> <p><!DOCTYPE>: It defines the document type or it instruct the browser about the version of HTML. <p/> <p><html > :This tag informs the browser that it is an HTML document. Text between html tag describes the web document. It is a container for all other elements of HTML except <!DOCTYPE> <p/> <p><head>: It should be the first element inside the <html> element, which contains the metadata(information about the document). It must be closed before the body tag opens. <p/> <p><title>: As its name suggested, it is used to add title of that HTML page which appears at the top of the browser window. It must be placed inside the head tag and should close immediately. (Optional) <p/> <p><h1> : Text between <h1> tag describes the first level heading of the webpage. <p/> <p>HTML Elements: <p/> <p>An HTML file is made of elements. These elements are responsible for creating web pages and define content in that webpage. An element in HTML usually consist of a start tag <tag name>, close tag </tag name> and content inserted between them. Technically, an element is a collection of start tag, attributes, end tag, content between them. <p/> <p>Such as: <p/> <p><h1>Write Your First Heading</h1>   <p/> <p>For the default display and styling purpose in HTML, all the elements are divided into two categories: <p/> <p>1.Block-level element <p/> <p>2.Inline element <p/> <p>1.Block-level element:These are the elements, which structure main part of web page, by dividing a page into coherent blocks.A block-level element always start with new line and takes the full width of web page, from left to right.These elements can contain block-level as well as inline elements.<p/> <p>Following are the block-level elements in HTML.<address>, <article>, <aside>, <blockquote>, <canvas> etc.<p/> <p>2.Inline elements: <p/> <p>Inline elements are those elements, which differentiate the part of a given text and provide it a particular function. These elements does not start with new line and take width as per requirement. The Inline elements are mostly used with other elements. <p/> <p>Example:<a>, <abbr>, <acronym>, <b>, <bdo>, <big>, <br>, <button>, <cite>, <code>, <dfn>, <em>, <i>, <img>, <input>, <kbd>, <label>, <map>, <object> <p/> <p>HTML Attribute: <p/> <p>Attributes define additional characteristics or properties of the element such as width and height of an image. Attributes are always specified in the start tag (or opening tag) and usually consists of name/value pairs like name=\'value\'. Attribute values should always be enclosed in quotation marks. <p/> <p>Syntax: <p/> <p><element attribute_name=\'value\'>content</element>  <p/> <p>CSS: <p/> <p>CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces. <p/> <p>CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.<p/> <p>CSS Selector: <p/> <p>CSS selectors are used to define the elements we want to style with CSS. There are many different types of CSS selectors, each with their own unique syntax. These tell the browser which elements to apply CSS property values to. <p/> <p>The element or elements targeted by a CSS selector are referred to as the “subject of the selector.” A subject can be selected based on its element type, class, ID name, given attribute, or pseudo-state. <p/> <p>Example: Here, all <h1> elements on the page will be center-aligned, with a red text color:   <p/> <p>h1 { <p/> <p>text-align: center; <p/> <p>color: red; <p/> <p>} <p/> <p>CSS value: <p/> <p>CSS values are used in CSS Properties and reside within CSS declaration block, which is a part of the CSS rule / statement.CSS allows following types of values : Integers and real numbers, Lengths, Percentages, URLs, Counters, Colors, Strings, Unsupported Values. <p/> <p>Reference: <p/> <p>1.HTML. (n.d.). Wikipedia. Retrieved May 30, 2021, from https://en.wikipedia.org/wiki/HTML <p/> <p>2.CSS. (n.d.). Wikipedia. Retrieved May 30, 2021, from https://en.wikipedia.org/wiki/CSS <p/> <p>3.HTML and CSS. (n.d.). W3school. Retrieved May 30, 2021, from https://www.w3schools.com/html/ <p/> <p>4.CSS. (n.d.-b). MDN Web Docs. Retrieved May 30, 2021, from https://developer.mozilla.org/en-US/docs/Web/CSS <p/> ',
};

export default article;
