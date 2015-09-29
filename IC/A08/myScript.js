/**
 * Created by Johny on 9/28/2015.
 */
$(document).ready(function(){
  var na = $("#na");
  var ag = $("#ag");
  var eth = $("#eth");
  var co = $("#co");
  var num = $("#num");
  $(na).hide();
  $(ag).hide();
  $(eth).hide();
  $(co).hide();
  $(num).hide();


  $("#name").click(function(e){
    $("#na").toggle();
    $("#name").text(function(i, text){
     return text === "What's your name? (-)" ? "What's your name? (+)" : "What's your name? (-)";
    });
    e.preventDefault();
  });
  $("#age").click(function(e){
    $("#ag").toggle();
    $("#age").text(function(i, text){
      return text === "How old are you? (-)" ? "How old are you? (+)" : "How old are you? (-)";
    });
    e.preventDefault();
  });
  $("#ethnic").click(function(e){
    $("#eth").toggle();
    $("#ethnic").text(function(i, text){
      return text === "What's your ethnic background? (-)" ? "What's your ethnic background? (+)" : "What's your ethnic background? (-)";
    });
    e.preventDefault();
  });
  $("#color").click(function(e){
    $("#co").toggle();
    $("#color").text(function(i, text){
      return text === "What's your favorite color? (-)" ? "What's your favorite color? (+)" : "What's your favorite color? (-)";
    });
    e.preventDefault();
  });
  $("#number").click(function(e){
    $("#num").toggle();
    $("#number").text(function(i, text){
      return text === "What's your favorite number? (-)" ? "What's your favorite number? (+)" : "What's your favorite number? (-)";
    });
    e.preventDefault();
  });
  $("#submit").click(function(e){
    var numLinks = $("#submit").val();
    $("#submit").val("numLinks");
    alert(numLinks);
  });
});