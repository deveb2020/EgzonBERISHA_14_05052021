# HRnet - P14

_Convert old jQuery code to new React code and optimise the loading speed in the browser_

## Project key informations

* The main objective of this project was to learn how to convert old code into new code.

* In this project I am using Code Splitting method and React Lazy component to optimize browser loading speed.

* Basically what I did is split the bundle into several pieces and thanks to the React lazy component, I download only the desired file and not the whole bundle/project

* I use Redux with hooks for the state menagement

* I use Lighthouse to compare the performances of the two versions

## How it works ?

I'am grabing the input values and I'am storing them inside of a useState Hook, than onSubmit I send all the input values as an object to the Redux Store using useDispatch Hook,
and in the second page I'am grabind this data and displaying it to a dynamic table using useSelector Hook.

## How to see the result ?

This project is deployed using github pages, to visit the website you can click in this link:

[ https://deveb2020.github.io/EgzonBERISHA_14_05052021/]
