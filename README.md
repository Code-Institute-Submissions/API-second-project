# API-Second-Project

This project focuses on using JavaScript to connect the Spooncular API. The website was built with the intention of helping people find recipes based on the ingredients they have in the fridge. The website is designed to be intuitive and easy to navigate. 
It is targeted towards users who are interested in cooking, finding recipes based on ingredients, and following along to videos as they are prepping and cooking. The website not only promotes Spooncular, but It also provides users with an option to either visit the official Spooncular website or search for recipes on the current website. This website allows users to easily follow along with the online videos without having to read a list of instructions. Watching videos also gives them the ease to pause the video or rewind if they have missed a step. 

## Demo

A live demo of the website can be found here: https://soycat999.github.io/API-second-project/


## Project Strategy and Scope
### User Stories

| User Stories        | Description           | Features to implement  |
| :------------- |:-------------| :-----|
| 1      | User would like to watch and follow along to a video| To include video of the recipe searched based on ingredients.  |
| 2      | User would like to know more about  Spooncular. | To include a link to the official Spooncular website.  |
| 3      | User would like a clean interface that is simple to use on mobile  | To include media queries that eliminate certain elements when on mobile view.  |
| 4      | User would like to see more content on tablets, desktop | To include media queries that display certain elements when on tablet or desktop view.   |

## Project Structure
### (i) Overview
- Homepage - The homepage is fairly simple and straightforward to use. On mobile view, users will be able to search for recipes without having to navigate through needless content. On larger devices such as a tablet or a desktop, users will be able to see some content pertaining to the the search function used. Other than that, the interface is easy to use. 

### (ii) Wireframes here.
View wireframes for both desktop and mobile here:
https://docs.google.com/document/d/1EXbarzoNlgPHfAAtar7pMNcObNwsNRzCSKVN2oFSOc8/edit

## Project Skeleton
### (i) Existing Features
The top header on the website lets the user know the function of the website right off the bat.  It also “promotes” the Spooncular API. The search bar is easily seen and accessible to the user. After the user inputs the ingredient, a recipe video will load in the bottom. On tablet or desktop view, the user will be provided with more information about using the API. 

### (ii) Features to implement in the future
In the future, I would like the website to load more than one video when a user searches for a recipe. This will give users more options. I would also like to connect another API to give users more information on various various. Additionally, I would like to include more interactive elements to keep users engaged. One more thing that I would like to implement is to have a new browser window open when the link to the Spooncular website is clicked.

### Limitation 
Clicking on the link (header text - Recipe Finder by Spooncular) will take users to the Spooncular page, but it will not open in a new window. 

## Project Surface
### Design Choices
(i) The colour scheme of header text and the nav bar is intended make the title of the website stand out. 
(ii) The nav bar text changes colour when user hovers over the text. This will show them that the text is a link. Additionally, when the mouse hovers over the text, the cursor changes. 
(iii) The font looks fun and appeals to users. The background image is attractive and colourful, so as to draw the users eye. 
(iv) The colour of the text box above the search bar font colour of the text inside the box matches the colours of the background image. 

## Technologies

1. HTML (link to the documentation: https://devdocs.io/html/)
HTML was used to structure the content of the website.
2. CSS (link to the documentation: https://devdocs.io/css/)
CSS was used to style the website.
3. Bootstrap (link to the documentation: https://getbootstrap.com)
4. Javascript — for the navigation bar. (link to the documentation: https://devdocs.io/jsdoc/)

## Testing
(i) Mobile Responsiveness

This site was tested across multiple devices multiple mobile devices 
(iPhone 4, 5, 7: Chrome and Safari, iPad, Samsung Galaxy) to ensure compatibility and responsiveness.)

Website tested on mobile and on laptop mode : 
https://docs.google.com/document/d/140WFOEAWvWYbQggkNLfy00ew1iz-99JKdUMuonGJmC0/edit

(ii) Browser Compatibility

This site was tested across multiple devices multiple mobile devices 
(iPhone 4, 5, 7: Chrome and Safari, iPad, Samsung Galaxy) to ensure compatibility and responsiveness.)

(iii) Additionally, certain elements such as the textbox above the search bar is turned off for phones, as soon as the breakpoint hits min-device-width: 320px.

(v) Test Cases 

| Test Case(s)        | Description           | Outcome |
| :------------- |:-------------| :-----|
| 1      | When user hovers over the text on the header text , it will change colour. Additionally, hovering over the text will change the cursor to show users that is is a link. | Pass  |
| 2      | When user clicks on the link, they will be redirected to the Spooncular page | Pass  |
| 3      | When user enters an ingredient, it will call a recipe video from YouTube. Users will be able to watch this video. | Pass  |
| 4      | Mobile users should not be able to see a block of text above the search bar in mobile view due to media queries. | Pass  |
| 5      | Tablet and desktop users will be able to see more content pertaining to the website. | Pass  |

## Bugs Discovered
No bugs found. 

### Acknowledgements

W3Schools: To format background image.
https://www.w3schools.com/cssref/pr_background-image.asp

Pexels: To choose background image.
https://www.pexels.com/

Stackoverflow:

1. Changing text color on hover then having it change back to the original colour.
https://stackoverflow.com/questions/3741157/change-background-color-on-mouseover-and-remove-it-after-mouseout

2. Linking with jQuery.
https://stackoverflow.com/questions/9081426/using-jquery-to-programmatically-click-an-a-link

3. JQuery to change the colour of font when hovered.
https://stackoverflow.com/questions/6836166/jquery-change-hover-on-color-then-return-back-to-original-color

4. Media queries.
https://stackoverflow.com/questions/16387400/getting-the-right-font-size-on-every-mobile-device/16387418

Google Fonts: For fonts.
https://fonts.google.com/

Bootstrap: For button.
https://getbootstrap.com/docs/4.4/components/buttons/



