// Pure Functions
// Example: co-worker makes a mess of the kitchen but brings a copy of your lunch for them to eat
const sink = []
const pinkLunchBox = ["soup", "oreos"]

function pureCoworker (lunch) {
    lunch = lunch.filter(f => f !== "oreos")
    lunch = [...lunch, "trash"]
    return lunch
}

pureCoworker (pinkLunchBox)
console.log(pinkLunchBox) // ["soup", "oreos"]
console.log (sink) // []

// Impure Functions
// Example: co-worker eats something from your lunchbox
// Use const sink and const pinkLunchBox from above

function impurecoworker(lunch) {
    lunch.splice(1, 1)
    lunch.push("trash")
    sink.push(lunch)
}

impurecoworker(pinkLunchBox)
console.log(pinkLunchBox) // ["soup", "trash"]
console.log(sink) // [ ["soup", "trash"] ]

// Pure Function
// Does not have side effects, always gives the same output for the same input

// Impure Function
// Has side effects, does not always give the same output for the same input

// Pure
function render(email) {
    const div = document.createElement("div")
    div.innerHTML = `
    <p>${email.by} - ${email.text}</p>
    `
    return div
}

let div1 = render({by: "Nat", text: "hi"})

let div2 = render({by: "Nat", text: "hi"})

console.log(div1, div2) // renders the same

// Impure
let email = { by: "Nat", text: "hi"}

function render() {
    const div = document.createElement("div")
    div.innerHTML = `
    <p>${email.by} - ${email.text}</p>
    `
    document.body.appendChild(div)
}

render()
email = { by: "Bob", text: "bye" }
render() // renders a second div differently

// Benefits of Pure Functions
// 1. Better for asynchronous code
// 2. Fewer bugs

// Testing Pure
describe("pure render", () => {
    it("works with on input", () => {
        const div = render({ by: "Nat", text: "hi"})
        expect(div.innerHTML).toBe("<p>Nat - hi</p>")
    })
    it("works with another input", () => {
        const div = render({ by: "Bob", text: "bye"})
        expect(div.innerHTML).toBe("<p>Bob - bye</p>")
    })
})

// Testing Impure
describe("pure render", () => {
    it("works with on input", () => {
       email = { by: "Nat", text: "hi"}
       render()
       const div = document.body.lastChild
       expect(div.innerHTML).toBe("<p>Nat - hi <p/>")
       div.remove()
    })
    it("works with another input", () => {
        email = { by: "Bob", text: bye }
        render() 
        const div = document.body.lastChild
        expect(div.innerHTML).toBe("<p>Bob - bye</p>")
        div.remove()
    })
})

// Type System
// This function is too big to add here. We'll discuss it at a later time when we learn typeScript.