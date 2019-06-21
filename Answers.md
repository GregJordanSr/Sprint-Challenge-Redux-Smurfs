1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Method are Array.map(), Array.filter(), Array.concat() and the method used to extend properties of another method is Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

It stores your state and keeps all the changes made to state which is why it's called the single source of truth. You can modify state by dispatching actions and reducers manage the actions and store them properly.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is the data that each component uses and it is centered around the UI and application state is centered around data for the application.


4.  What is middleware?

Middleware is what adds more functionality to redux, it lies between the actions and reducer and can control the flow of the actions passed to the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to do things asynchronously and it lets us do things like consume promises and other things that we wouldn't other-wise be able to do. It intercepts them and makes sure they are needed for any particular request


6.  Which `react-redux` method links up our `components` with our `redux store`?

connect()