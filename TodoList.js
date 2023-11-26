class TodoList {
    constructor(){
        this.items = ["task1", "task2"]
    }


    updateTable(){
        const tbody = document.getElementById("itemslist")
        tbody.innerHTML = ""
        let self = this
        this.items.map(function(item, i)  {
            // make the task table element
            const td = document.createElement("td")
            // add the task text
            td.innerHTML = item
            // make a second element for the delete button
            const td2 = document.createElement("td")
            // make the delete button
            const delbutton = document.createElement("button")
            // add the remove function call to the delete button
            delbutton.addEventListener("click", function(){self.remove(i)})
            // Add an X to the delete button text
            delbutton.innerHTML = "X"
            // add the button to the element 
            td2.appendChild(delbutton)
            // create the table row
            const tr = document.createElement("tr")
            // add the elements to the row
            tr.appendChild(td)
            tr.appendChild(td2)
            // add the row to the table body
            tbody.appendChild(tr)
        }
        )
    }

    add(){
        console.log("test")
        const iteminput = document.getElementById("iteminput")
        this.items.push(iteminput.value)
        this.updateTable()
        iteminput.value = ""
        iteminput.focus()
    }

    remove(index){
        console.log(`removing item in index ${index}`)

        //don't forget to update Table!
    }
}
