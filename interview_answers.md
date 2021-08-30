# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Context API solves the problem of prop drilling. In a large and complex applicaton, you may have to drill props 4 or even more levels down. This makes the tracking of state difficult and scattered.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   A store is a single source of truth because it is where all of the application's state is stored. A store is something that is created using a reducer, which is where the state and actions related to it is sroed. Actions is something like an intermediary that is called when the user wants to edit the state of the application. This is then passed to the reducer that communicates and edits the store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   Redux think allows us to use promises within our actions. This changes our action creates because now we can call them inside of each other using dispatch.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   My favorite state management system is 100% redux. Although context api can also do the globalization of state, I love how organized and structured redux is. It is very easy for others to read my code and logic.
