jQuery(document).ready(function() 

{
    jQuery('.tabs .tab-links a').on('click', function(e)  
	
	{
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

    });
	
});