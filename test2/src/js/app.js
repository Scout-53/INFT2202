// Shan Patel
// 100900902
// 2024-03-14


(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Added to the parent folder of the project
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // There was a TR tag breaking the html, so first fixed that.    

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    // document.title = "Shan Patel - Test 2";
    // Update the navbar title to say "YOUR NAME"
    // document.querySelector('.navbar-brand').textContent = "Shan Patel";
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    $('title').text("Shan Patel - Test 2");
    $('.navbar-brand').text("Shan Patel");
    const currentYear = new Date().getFullYear();
    $('footer .container').html('&copy; ' + currentYear + ' <b>Shan Patel</b>');


    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    const testTable = $('#test-table'); 
    const secondRow = testTable.find('tbody tr').eq(1); 
    secondRow.find('td').eq(2).text('100100100'); 

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
    const newRow = $('<tr></tr>');
    const firstName = $('<td></td>').text('Shan');
    const lastName = $('<td></td>').text('Patel');
    const bannerId = $('<td></td>').text('100900902');

    newRow.append(firstName, lastName, bannerId);
    testTable.find('tbody').append(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    // Getting the first row that contains Alice and removing it
    testTable.find('tbody tr:contains("Alice")').remove();


    // Question 5
    // add the .table-info class to your personal row
    // Same logic as above, but adding the class to the row
    $('tbody tr:contains("Shan")').addClass('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    $('tbody tr:contains("Adam")').removeClass('table-warning');

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    $('tbody tr:contains("John")').removeClass('table-dark');
    $('tbody tr:contains("John")').addClass('table-success');

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.
    const newContainer = $('<div class="container"></div>');
    const newCard = $('<div class="card" style="width: 18rem;"></div>');
    const cardImg = $('<img src="#" class="card-img-top">');
    const cardBody = $('<div class="card-body"></div>');
    const cardHeading = $('<h5 class="card-title">Shan Patel</h5>'); 
    const cardText = $('<p class="card-text">This is the test 2. Same as test 1 but instead, we have to use Jquery.</p>');
    const cardLink = $('<a href="https://durhamcollege.ca/" class="btn btn-primary">Durham College</a>');
    cardImg.attr('data-src', 'holder.js/250x200'); 
    cardBody.append(cardHeading, cardText, cardLink);
    newCard.append(cardImg, cardBody);
    newContainer.append(newCard);
    $('main').append(newContainer); 
    Holder.run(); 

    

})();
