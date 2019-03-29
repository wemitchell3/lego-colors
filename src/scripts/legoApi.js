const postEntry = (newLegoObject) => {
    return fetch("http://localhost:8088/entries", {
            method: "POST",
            body: JSON.stringify(newLegoObject),
            headers: {
                "Content-Type": "application/json"
            }
        })
}
