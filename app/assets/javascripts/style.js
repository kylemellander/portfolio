// Create the dropdown base
$('<div class="btn-group ko-nav-small"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-align-justify"></span><span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right">').appendTo("nav div");

// Populate dropdown with menu items
$(".ko-nav-full a").each(function() {
 var el = $(this);
 $("<li><a href='" + el.attr("href") + "'>" + el.text() + "</a></li>", {
     "href"   : el.attr("href"),
     "text"   : el.text()
 }).appendTo("nav div.ko-nav-small ul");
});

$("nav div ul.ko-nav-small").change(function() {
  window.location = $(this).find("option:selected").val();
});
