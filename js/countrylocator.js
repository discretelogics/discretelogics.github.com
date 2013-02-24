/*	================================================================================
$.Example.survey
Author: 	 Philip Poole
				
Date:		 2010-01-30
Description: Attemps to set the selected country in a drop down list of countries to
the user's current location. 
================================================================================ */

(function ($) {
  /**
	* <p>Attemps to set the selected country in a drop down list of countries to
	*    the user's current location.</p>
	* 
	* <p>For the script to work it is expect that each country is an option in a selected element
	* and the value for each option is the offical country code for that country.</p>
	*
	* <p>For more information view http://welovenicethings.com/XXXXX
	* 
	* <p>The script uses an API call from http://www.wipmania.com to carry out the 
	* Geolocation.</p>
	*
	* @param {string} cookieName The name of the cookie to set.
	* 
	* @example $.CountryLocator('ShippingAddress');
	* @class
	*/
  $.fn.CountryLocator = function (cookieName) {

    var $countrySelect = $(this);
    var isClicked = false;

    //add an event to the country select so if a user chooses a country before we do we do not overwrite that 
    //choice, we also store the choice in a cookie so we do not attemp the API call next time. 
    $countrySelect.click(function () {
      $.cookie(cookieName, $countrySelect.val());
      isClicked = true;
    });


    //if no cookie has been set (from a previous request) then call the API to find the users current country
    if ($.cookie(cookieName) == null) {
      $.getJSON('http://api.wipmania.com/jsonp?callback=?', '', function (json) {
        //if the user has already selected a country then do not overwrite that choice.
        if (!isClicked) {

          //set the country to users current location
          $countrySelect.children(' option[value=' + json.address.country_code + ']').attr('selected', 'selected');
          $.cookie(cookieName, json.address.country_code);
        }
      });
    } else {
      var countryCode = $.cookie(cookieName);
      $countrySelect.val(countryCode);
    }
    window.SetFlag();
  };

})(jQuery);