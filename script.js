var currentBox = 0;
function addExpense() {
    //assign submit data to variables
    const form = document.querySelectorAll(".form");
    var formData = new FormData(form[0]);
    let gridContainer;
    let type = formData.get("typeInput");
    type = type.charAt(0).toUpperCase() + type.slice(1);
    let name = formData.get("nameInput");
    let date = formData.get("dateInput");
    let amount = formData.get("amountInput");
    let text;
   



   

    //complete row by adding a box to every column

    for(let i = 0; i < 5; i++) {

        let box = document.createElement("div");
        currentBox++;
        gridContainer = document.getElementById("gridContainer2");
        box.classList.add("grid2Item");
        box.setAttribute("id", `boxNumber${currentBox}`); //starts at 1
        gridContainer.appendChild(box);
    
        //assign the specific text for each column
    
        switch(i) {
        
            case 0:
                text = document.createTextNode(type); 
                box.appendChild(text);
            break;

            case 1: 
                text = document.createTextNode(name); 
                box.appendChild(text);
            break;

            case 2: 
                text = document.createTextNode(date); 
                box.appendChild(text);
            break;

            case 3: 
                text = document.createTextNode(amount); 
                box.appendChild(text);
            break;

            case 4:
                box.classList.add("x");
                let thisBoxNum = box.id.slice(-2);
                box.addEventListener("click", () => {
                    for(let i=4; i>-1; i--){
                        box.parentNode.removeChild(document.getElementById(`boxNumber${( thisBoxNum -  i)}`));
                        
                        
                    }

                })
            break;
        }
    
    }
   

    return false;
    
}



