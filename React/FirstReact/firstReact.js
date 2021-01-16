
// tell React the items we want within our h1 tag.
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")

// nest another component via another React.createElement function call
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))
