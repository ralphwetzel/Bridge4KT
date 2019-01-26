function modulePostRender() {
	if ($("div[data-alpaca-field-name='bridge_pin']").find('input').val() === "") {
		$("div[data-alpaca-field-name='bridge_pin']").hide();
	}	
	else {
		$("div[data-alpaca-field-name='bridge_pin']").show();
	}
};