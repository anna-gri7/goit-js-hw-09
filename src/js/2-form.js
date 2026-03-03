const findForm = document.querySelector(`.feedback-form`)

let formData = {
    email: "",
    message: ""
}

const localStorageKey = "feedback-form-state"
const userEmail = findForm.elements.email
const userMessage = findForm.elements.message

  const getData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {}
    findForm.elements.email.value = getData.email ?? "";
    findForm.elements.message.value = getData.message ?? "";
    formData.email = userEmail.value
    formData.message = userMessage.value

findForm.addEventListener("input", e => {
    formData[e.target.name] = e.target.value.trim();
    const zip = JSON.stringify(formData)
    localStorage.setItem(localStorageKey, zip);
})

findForm.addEventListener("submit", e => {
    e.preventDefault()
        if (formData.email === "" || formData.message === "") {
            return alert (`Fill please all fields`)
    }
   
    console.log(formData);

        localStorage.removeItem(localStorageKey);
    findForm.reset();
    formData = { email: "", message: "" };
        
})