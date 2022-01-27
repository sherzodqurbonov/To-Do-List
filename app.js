window.addEventListener('DOMContentLoaded', () => {

    const title = document.querySelector('#title'),
          author = document.querySelector('#author'),
          year = document.querySelector('#year'),
          btn = document.querySelector('.btn'),
          bookList = document.querySelector('#book-list');

          btn.addEventListener('click', (event) => {
              event.preventDefault

          // Basic validation
            if (title.value == '' && author.value == '' && year.value == '') {
                alert('Please input your information.')
            }else {
                const newRow = document.createElement('tr')
            //Creatting New title
                const newtitle = document.createElement('th')
                    newtitle.innerHTML = title.value
                    newRow.appindChild(newtitle)
              // creatting New auther      
              const newauther = document.createElement('th')
                    newauther.innerHTML = author.value
                    newRow.appendChild(newauther)
                // creating date Year
                const dateyear = document.createElement('th')
                    dateyear.innerHTML = year.value
                    newRow.appendChild(dateyear)
                // display in UP
                bookList.appendChild(newRow)    
                
                title.value = ''
                author.value = ''
                btn.value = ''
                
            }


             
             
              



          })
   


})

