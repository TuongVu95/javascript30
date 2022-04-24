const inputs = document.querySelectorAll('.controls input');

function handleUpdate (){
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// console.log(inputs);
inputs.forEach((value, index, array) => {
    value.addEventListener('change', handleUpdate);
    value.addEventListener('mousemove', handleUpdate);
})