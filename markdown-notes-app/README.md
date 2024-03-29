# Markdown Notes App
A simple notes app created using React that enables user to write notes in markdown file and then save them for later use.

## Live Link:
[JuJu Notes](https://juju-notes.netlify.app/)

## Features to add
1) Sync with Local Storage  
```
    localstorage.getItem("key")
    localstorage.setItem("key",value)
```
Value must be a string so JSON.stringify(value) should be used in case of complex objects. Also to convert JSON string back to JS object JSON.parse() can be used.

2) Show the notes summary(first line on note) on sidebar 

3) Update note and put the last modified note in top of sidebar 

4) Delete Notes 

## Some Insights 
Lazy state initialization is used so that the initialization occurs only once when an expensive code is happening inside state initialization  
Syntax:
```
    const [state, setState] = React.useState(
        () => console.log("State initialization")
    )
```
