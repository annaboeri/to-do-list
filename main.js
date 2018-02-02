var $toDoInput = $('#todo')
var $submitButton = $('.btn')
var $toDoList = $('.list')

var $newListItem = $('<p>')
var $newCheckbox = $('<input type="checkbox">')
var $newCreateIcon = $('<i class="glyphicon glyphicon-star"></i>')
var $newSpan = $('<span>')
var $newRemoveIcon = $('<i class="glyphicon glyphicon-remove"></i>')


function addToList(){
    var $newListItem = $('<p>')
    var $newCheckbox = $('<input type="checkbox">')
    var $newCreateIcon = $('<i class="glyphicon glyphicon-star"></i>')
    var $newSpan = $('<span>')
    var $newRemoveIcon = $('<i class="glyphicon glyphicon-remove"></i>')


    $newSpan.text($toDoInput.val())
    $newListItem.append($newCheckbox)
    $newListItem.append($newCreateIcon)
    $newListItem.append($newSpan)
    $newListItem.append($newRemoveIcon)
    $toDoList.prepend($newListItem)
}
        


$submitButton.on('click', addToList)
