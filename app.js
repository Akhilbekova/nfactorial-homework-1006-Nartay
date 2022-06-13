let resultPlace = $("#result")
function tellStory(){
    let personName = $("#name").val()
    let character = $("#character").val()
    let adverb = $("#adverb").val()
    let adjective = $("#adjective").val()
    $("<p>Wendy's crazy MadLibs Story</p>").appendTo("#title")
    $(`<p>One day, my friend <span style="color: green;">${personName}</span>
 was visiting New York and ran into <span style="color: green;">${character}</span>. 
 <span style="color: green;">${personName}</span> ran <span style="color: green;">${adverb}</span>
  to meen <span style="color: green;">${character}</span>. But <span style="color: green;">${character}</span>
   turned out to be very <span style="color: green;">${adjective}</span> and <span style="color: green;">${personName}</span>
    din not enjoy the meeting. </p>`).appendTo("#result")
}
