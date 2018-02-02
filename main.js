var $toDoInput = $('#todo')
var $submitButton = $('.btn')
var $toDoList = $('.list')
var $checkbox = $('input[type=checkbox]')
var $starIcon = $('.glyphicon.glyphicon-star')


function addToList(){
    var $newListItem = $('<p>')
    var $newCheckbox = $('<input type="checkbox">')
    var $newStarIcon = $('<i class="glyphicon glyphicon-star"></i>')
    var $newSpan = $('<span>')
    var $newRemoveIcon = $('<i class="glyphicon glyphicon-remove"></i>')

    $newSpan.text($toDoInput.val())
    $newListItem.append($newCheckbox)
    $newListItem.append($newStarIcon)
    $newListItem.append($newSpan)
    $newListItem.append($newRemoveIcon)
    $toDoList.prepend($newListItem)

    $toDoInput.val('')
    $newCheckbox.on('click', crossOffList)
    $newStarIcon.on('click', changeStarColor)
    
}

function crossOffList(){
  //  if ($checkbox.val('') 
    var $this = $(this)
    var content =  $(this).parent().find('span')
    if ($this.val() === 'on'){
        content.css({"text-decoration":"line-through"})
        $this.val('off') 
    }
    else {
        content.css({"text-decoration":"none"})
        $this.val('on') 
    }
}

function changeStarColor (){
    var $this = $(this)
    if ($this.css("color") === "rgb(71, 62, 57)" ){
        $this.css({"color" :"#ffcc00"})
    }
    else {
        $this.css({"color" :  "rgb(71, 62, 57)"})
    }   
}

$submitButton.on('click', addToList)
$checkbox.on('click', crossOffList)
$starIcon.on('click', changeStarColor)








