let button = document.getElementById("listButton");

let theText = document.getElementById("item");

const listItems = document.getElementById("listItems");


let buttonHome = document.getElementById("home");

buttonHome.addEventListener("click", () =>
{  
   window.location.href = "index.html";
});


button.addEventListener("click", () => {
       
      // Create the Li element
       
       const li = document.createElement("li");

       const span = document.createElement("span"); 

       // Create the delete button
       const liButton = document.createElement("button"); 
       liButton.classList.add('delete');
       liButton.innerHTML = "Delete";

       // Create the edit button
       const editButton = document.createElement("button"); 
       editButton.classList.add('edit');
       editButton.innerHTML = "Edit";


       // Append buttons to li, set li text to textbox box, append li to the list.

       
       span.innerHTML += theText.value;
       document.getElementById("listItems").appendChild(li);
       li.appendChild(span);
       li.appendChild(editButton);
       li.appendChild(liButton);

      


       li.addEventListener('click', (e) => {

         

         if(e.target.classList == "delete")
         {
            listItems.removeChild(li);
         }

         else if(e.target.classList == "edit")
         {
            // creates new text field

            const span = li.firstElementChild;
            const textContent = li.innerHTML;

            const editBox = document.createElement("input");
            
            editBox.type = "text";
            editBox.setAttribute("id", "editBox");
            editBox.value = span.textContent;
            li.appendChild(editBox);


            

         // Create the save button
         const saveButton = document.createElement("button"); 
         saveButton.classList.add("save");
         saveButton.setAttribute("id", "save");
         saveButton.innerHTML = "Save";
         li.appendChild(saveButton);

         // Create the cancel button
         const cancelButton = document.createElement("button"); 
         cancelButton.classList.add("cancel");
         cancelButton.setAttribute("id", "cancel");
         cancelButton.innerHTML = "Cancel";
         li.appendChild(cancelButton);




           
            

         }
         else if(e.target.classList == "cancel")
         {
            const editBox = document.getElementById("editBox");
            
            li.removeChild(editBox);

            let saveButton = document.getElementById("save");
            li.removeChild(saveButton);

            let cancelButton = document.getElementById("cancel");
            li.removeChild(cancelButton);

            

         }
         else if(e.target.classList == "save")
         {
            const editBox = document.getElementById("editBox");
            span.innerHTML = editBox.value;
            li.removeChild(editBox);

            let saveButton = document.getElementById("save");
            li.removeChild(saveButton);

            let cancelButton = document.getElementById("cancel");
            li.removeChild(cancelButton);
            
         }
         
        
         
			
		});


    });

