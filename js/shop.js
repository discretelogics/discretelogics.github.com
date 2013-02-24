function ShowRequired($e, show)
{
  if (show)
  {
    $e.removeClass("shiftBack");
  }
  else
  {
    $e.addClass("shiftBack");
  }
}
function IsEuropeanCountry(isoCountry)
{
  var countries = ["BE", "BE", "BG", "CZ", "DK", "DE", 
                   "EE", "IE", "EL", "ES", "FR", "IT",
                   "CY", "LV", "LT", "LU", "HU", "MT",
                   "NL", "AT", "PL", "PT", "RO", "SI", 
                   "SK", "FI", "SE", "GB"];
  var found = $.inArray(isoCountry, countries);
  return found != -1;
}
function UpdateFormDisplay($e)
{
  ShowRequired($e, $e.val() == "");
}
function SetFlag()
{
  $("#flag").attr("src", "../img/flags/" + $("#country").val().toLowerCase() + ".png");
}
function UpdateVAT()
{
  var c = $("#country").val();
  if(c == "AT")
  {
    $("#vatidblock").hide();
    window.taxrate = 0.2;
  }
  else
  {
    if(IsEuropeanCountry(c))
    {
      $("#vatidblock").show();
      window.taxrate = 0.2;
    }
    else
    {
      $("#vatidblock").hide();
      window.taxrate = 0;
    }
  }
  Compute();
}

$.fn.checkval = function number() {
  var v = $(this).val();
  if (v * 1 == v && parseFloat(v) == parseInt(v) && v >= 0) {
    return parseInt(v);
  }
  throw "format error";
};

function Compute()
{
  var p1 = $("#nTeaShell").checkval() * window.TeaShellPrice;
  $("#teashelltotal").text(p1.toFixed(2));
  var p2 = $("#nTeaHouse").checkval() * window.TeaHousePrice;
  $("#teahousetotal").text(p2.toFixed(2));
  var p3 = 0;
  $("#teahousetrialtotal").text(p3.toFixed(2));

  var p = p1 + p2;
  var tax = p * window.taxrate;
  if ($("#vatid").val() != "") tax = 0;
  $("#tax").text(tax.toFixed(2));
  $("#htax").val(tax.toFixed(2));
  $("#total").text((p + tax).toFixed(2));
}
function getformvalues() {
  var f, o, _i, _len, _ref, _results;
  o = {};
  _ref = $("form input, form select");
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    f = _ref[_i];
    _results.push(o[f.name] = $(f).val());
  }
  return o;
}
$(document).ready(function ()
{
  $("#country").CountryLocator("Country");
          
  UpdateFormDisplay($("#firstName"));
  UpdateFormDisplay($("#lastName"));
  UpdateFormDisplay($("#company"));
  UpdateFormDisplay($("#street"));
  UpdateFormDisplay($("#city"));
  UpdateFormDisplay($("#zip"));
  UpdateFormDisplay($("#email"));

  $("#personlic").focusin(function ()
  {
    $("#licenseTypeNote").show();
  });
  $("#personlic").focusout(function ()
  {
    $("#licenseTypeNote").hide();
  });
  $("#vatid").focusin(function ()
  {
    $("#vatidnote").show();
  });
  $("#vatid").focusout(function ()
  {
    $("#vatidnote").hide();
  });
  $("#corplic").click(function ()
  {
    $("#company").removeClass("hideBack");
  });
  $("#personlic").click(function ()
  {
    $("#company").addClass("hideBack");
  });
  $(".required input").keyup(function ()
  {
    var $e = $(this);
    ShowRequired($e, $e.val() == "");
  });
  $("#country").keyup(function ()
  {
    SetFlag();
    UpdateVAT();
  });
  $("#country").change(function ()
  {
    SetFlag();
    UpdateVAT();
  });

  $("#nTeaShell, #nTeaHouse, #nTeaHouseTrial, #vatid")
    .keyup(Compute)
    .change(Compute);
  
  if (window.location.search == "?teahouse=trial") {
    $("#nTeaShell").val(0);
    $("#nTeaHouse").val(0);
    $("#nTeaHouseTrial").val(1);
  }

  UpdateVAT();

  $("form").submit(function(e)
  {    
    if  (
        ($("#firstName").val() == "") ||
        ($("#lastName").val() == "") ||
        ($("#company").val() == "" && ($("#corplic").attr("checked") == true)) ||
        ($("#street").val() == "") ||
        ($("#city").val() == "") ||
        ($("#zip").val() == "") ||
        ($("#email").val() == "")
        )
    {
      $("#requiredHint").show();
      e.preventDefault();
      return false;
    };  
    var cn = $("#country option:selected").text();
    $("#CountryName").val(cn);            
              
    var order = getformvalues();
    var json = JSON.stringify(order);
    var cmd = {
      url: "http://discretelogics.azurewebsites.net/shop/order",
      // url: "http://localhost:5500/shop/order",
      type: "POST",
      contentType: "text", //
      data: json,
      success: function () {
        window.location = "shopreceived";
      },
      error: function () {
        alert("The confirmation email could not be sent, please contact us directly by email: office@discretelogics.com");
      }
    };
    $.ajax(cmd);                
    return false;
  });
});

