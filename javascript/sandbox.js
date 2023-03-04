// alert("holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in-between those two checkboxes should be checked");

const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox =>{
      if(checkbox === this || checkbox === lastChecked ){
        inBetween = !inBetween;
        console.log('Starting to check them in between');
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

