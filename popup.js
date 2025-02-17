document.getElementById("scan").addEventListener("click", () => {
    // alert(__NEXT_DATA__.props.pageProps.task.publicAttributes.questions.map(({index, value}) => ({index, value})));
    const answers = document.getElementById("answers").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: fillAnswers,
            args : [ answers ],
        });
    });
});

function fillAnswers(answers = []) {
    document.body.style.color = "lightblue";
    let elements = document.getElementsByClassName('ant-checkbox-input');
    for (let i = 0; i < elements.length; i++) {
        elements[i].click();
    }

    if (typeof answers === "string") {
        answers = JSON.parse(answers);
    }

    let k = 0;
    for (let i = 0; i < answers.length; i++) {
        let element = document.getElementById(`answer-${answers[i].index}`);
        if (element) {
            if (answers[i].multiple) {
                for (let j = 0; j < answers[i].value.length; j++) {
                    setTimeout(
                        () => document.getElementById(`answer-${answers[i].index}`).querySelector(`input[class="ant-checkbox-input"][value="${answers[i].value[j]}"]`).click(),
                        100 * (k++),
                    );

                }
            } else {
                setTimeout(
                    () => document.getElementById(`answer-${answers[i].index}`).querySelector(`input[class="ant-radio-input"][value="${answers[i].value}"]`).click(),
                    100 * (k++)
                )
            }
        }

    }
}


const answers = [
    {
        "question": "When should you consider using Redux?",
        "answers": [
            "When you are just starting to learn React",
            "When your application becomes complex and managing state becomes difficult",
            "When you want to implement server-side rendering",
            "Before creating any React components"
        ],
        "multiple": false,
        "index": 0,
        "value": 1
    },
    {
        "question": "Select the scenarios where Redux can be useful.",
        "answers": [
            "Large amounts of shared application state",
            "Frequent updates to the application state",
            "Complex logic for updating the state",
            "Medium or large-sized codebase",
            "Keeping track of state changes over time"
        ],
        "multiple": true,
        "index": 1,
        "value": [0, 1, 2, 3, 4]
    },
    {
        "question": "What is the main purpose of Redux middleware?",
        "answers": [
            "To modify server-side responses",
            "To handle third-party extensions between dispatching an action and reaching the reducer",
            "To optimize React components",
            "To manipulate DOM elements"
        ],
        "multiple": false,
        "index": 2,
        "value": 1
    },
    {
        "question": "Select the valid use cases for Redux middleware.",
        "answers": [
            "Logging",
            "Crash reporting",
            "Asynchronous API calls",
            "Routing",
            "Styling React components"
        ],
        "multiple": true,
        "index": 3,
        "value": [0, 1, 2, 3]
    },
    {
        "question": "Is using the switch statement mandatory for handling actions in reducers?",
        "answers": [
            "Yes, it's the only way to handle actions in reducers",
            "No, you can use any approach you'd like, such as if statements or lookup tables"
        ],
        "multiple": false,
        "index": 4,
        "value": 1
    },
    {
        "question": "What does the Redux Toolkit package help with in a Redux application?",
        "answers": [
            "To provide an MVC architecture for your application",
            "To simplify common Redux use cases, such as store setup, and offer good default behavior out of the box",
            "To create React components using Redux",
            "To implement server-side rendering"
        ],
        "multiple": false,
        "index": 5,
        "value": 1
    },
    {
        "question": "What tool is recommended for mocking network requests during testing?",
        "answers": [
            "Redux DevTools",
            "React-Redux hooks",
            "Mock Service Worker (MSW)",
            "Jest"
        ],
        "multiple": false,
        "index": 6,
        "value": 2
    },
    {
        "question": "Where should side effects be implemented in Redux?",
        "answers": [
            "In reducers",
            "In mapStateToProps",
            "In middleware",
            "In store enhancers"
        ],
        "multiple": false,
        "index": 7,
        "value": 2
    },
    {
        "question": "Which API is built into Redux Toolkit and specifically designed for data fetching and caching?",
        "answers": [
            "Axios",
            "RTK Query",
            "Thunk",
            "createSlice"
        ],
        "multiple": false,
        "index": 8,
        "value": 1
    },
    {
        "question": "What is the main concept behind the Flux architecture?",
        "answers": [
            "Two-way data binding",
            "Unidirectional data flow",
            "Model-View separation",
            "Component-based UI"
        ],
        "multiple": false,
        "index": 9,
        "value": 1
    },
    {
        "question": "Which of the following is a primary component of the MVC architecture?",
        "answers": [
            "Dispatcher",
            "Action Creator",
            "ViewModel",
            "Controller"
        ],
        "multiple": false,
        "index": 10,
        "value": 3
    },
    {
        "question": "What is the primary purpose of Thunks in Redux?",
        "answers": [
            "To combine multiple reducers",
            "To enable async action creators",
            "To manage component state",
            "To optimize rendering performance"
        ],
        "multiple": false,
        "index": 11,
        "value": 1
    },
    {
        "question": "What is a primary use case for Redux-Saga?",
        "answers": [
            "Managing component state",
            "Optimizing rendering performance",
            "Handling complex side effects",
            "Combining multiple reducers"
        ],
        "multiple": false,
        "index": 12,
        "value": 2
    },
    {
        "question": "Which of the following options describes the main function of the useSelector hook in React-Redux?",
        "answers": [
            "Enables React components to write data to the Redux store",
            "Allows React components to read data from the Redux store",
            "Permits the creation of new selectors for the Redux store",
            "Enables the removal of data from the Redux store"
        ],
        "multiple": false,
        "index": 13,
        "value": 1
    },
    {
        "question": "Which of the following statements accurately reflects the recommended approach for managing state in a React + Redux application?",
        "answers": [
            "Global state should be stored in React components, and local state should go in the Redux store",
            "Global state should go in the Redux store, and local state should stay in React components",
            "Both global and local state should be managed exclusively in React components",
            "Global state and local state should be split between the Redux store and React components equally"
        ],
        "multiple": false,
        "index": 14,
        "value": 1
    },
    {
        "question": "Choose the correct statements:",
        "answers": [
            "The store is a container that holds the application's global state",
            "Directly modifying or changing the state inside the Redux store is allowed for flexibility",
            "The only way to update the state is by dispatching a plain action object to the store",
            "When an action is dispatched, the store runs the root reducer function to calculate the new state",
            "Subscribers are notified by the store about state updates, allowing the UI to be refreshed with new data"
        ],
        "multiple": true,
        "index": 15,
        "value": [
            0, 2, 3, 4
        ]
    }
]