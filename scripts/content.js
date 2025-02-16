console.log(
    JSON.stringify(
        JSON.parse(window.__NEXT_DATA__.textContent)
        .props.pageProps.task.publicAttributes.questions.map((item, index) => ({ ...item, index, value: 0 }))
    )
)