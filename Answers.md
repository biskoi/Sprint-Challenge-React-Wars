# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Since DOM manipulation is expensive, React utilizes a virtual DOM to make changes to from component's state changes. After each render, React checks the diff between the virtual DOM and the actual DOM. It then only makes the changes it needs to, resulting in less DOM manipulation overall.

When you have an application that changes state frequently, or needs to be able to quickly display new UI elements according to user interaction, you should use React.

1. What does it mean to think in react?

To think in React is to look at an app or mockup, and be able to abstract them into discrete components that work together. You will need to identify what requires state, and what props to use for each component. Additionally, you might need to sync the components together or set triggers in the dependency array for useEffects if you need the UI to update when something in particular happens.

1. Describe state.

 A component can have a state by importing and utilizing useState from React. Not every component needs to have a state. It can be thought of as information within the component. Every time the state changes, it will cause React to re-render so that the information displayed inside of the component is accurate to its current state. Usually, the information inside the component's state is passed down onto a child component as the child's props, or properties.

1. Describe props.

 All Components have props. Props are similar to arguments/parameters that you pass into a component. Props are received from the parent component, and are immutable. They can be accessed within the child component for any purpose except changing it. To change it, the child component must request the parent component to change its state, and then pass the new prop back down to the child, since information flows from the top.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are functions that run after a state or prop changes, depending on what you have it set to in your dependency array for useEffect. This is known as a hook, and each time it catches a change, it triggers a re-render with the new information. 
