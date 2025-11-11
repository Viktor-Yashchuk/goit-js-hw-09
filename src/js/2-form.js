const form = document.querySelector('form');
const STORAGE_KEY = "feedback-form-state";
const formData = {
    email: '',
    message: ''
};

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (!['email', 'message'].includes(name)) return;
    formData[name] = value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})

let saveData = null;
try {
    saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch (error) {}
    if (saveData?.email || saveData?.message) {
        form.elements.email.value = saveData.email || '';
        form.elements.message.value = saveData.message || '';
        formData.email = saveData.email || '';
        formData.message = saveData.message || '';
    }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert('Fill please all fields');
        return;
    } console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
})