What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to help ensure the data and props you are passing down to children components are the correct type. Wether it should be an array, object, string, number, propTypes can be used to require the props to be a certain type, or check to see that they pass the proptypes type check.  

 Describe a life-cycle event in React?

Our components have lives: when born, exist, updated 
Be able to act on updates to our components. 
1st life cycle method triggered when component born:
-Constructor- Creating instance of class
2nd: Render
-only lifeccyle that’s required
-called as many times as needed in life of component
3rd: ComponentDidMount
-called only once in life of component
3.5: ComponentDidUpdate
-Method that checks what happens AFTER we Render
4th: Component Will Unmount:
Cleanup of events & handlers


 Explain the details of a Higher Order Component?
 HOC is a function that receives a Component as an argument and returns a new component. Main reason used
 is to Share logic/functionality between components.
 Extending the functionality of child components, and allows them to have seperate states from each other. You get more functionality when return class Components, due to access to state.
-other functionality includes CSS/styles inherited from the Component its wrapped in
-as well as state, methods and properties
Real Use cases
Authentication, user levels, search tags, location specific suggestions, filtering only things you want to render 
Render something to screen only if user is logged in (don’t render if not logged in)
git pu


 What are three different ways to style components in React? Explain some of the benefits of each.

 React strap 
 -bootstraps great for having UI design pre built for you
-great for prototyping
-auto fully responsive built in media queries

Styled Components
-pass down all your regular props down to children component
-can use many of your normal CSS properties
-can be fully customized

-Use of regular inline CSS
-manageability can be difficult
-very high level of specificity