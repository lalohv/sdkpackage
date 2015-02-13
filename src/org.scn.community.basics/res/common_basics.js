/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */

/**
 * Global Functions for work with components
 */

var org_scn_community_basics = org_scn_community_basics || {};

org_scn_community_basics.resizeContentAbsoluteLayout = function (parent, mainObject) {
	if(parent._oContentPlaced != true) {
		var jqThis = parent.$();
		
		parent.addContent(
				mainObject,
				{left: "0px", top: "0px"}
		);
		
		parent._oResize = function() {
			parent._containerWidth = jqThis.outerWidth(true) + "px";
			parent._containerHeight = jqThis.outerHeight(true) + "px";

			if(mainObject.setWidth) {
				mainObject.setWidth(parent._containerWidth);	
			}
			
			if(mainObject.setHeight) {
				mainObject.setHeight(parent._containerHeight);	
			}
		};
		
		// attach resize handler
		jqThis[0].onresize = parent._oResize;

		// call resize handler
		parent._oResize();	

		// redefine the layout functions
		var currentWidthFunction = parent.setWidth;
		var currentHeightFunction = parent.setHeight;

		if(currentWidthFunction) {
			parent.setWidth = function (value) {
				var r = currentWidthFunction.call(parent, value);
				// always trigger resize
				parent._oResize();
				
				return r;
			};
		}
		if(currentHeightFunction) {
			parent.setHeight = function (value) {
				var r = currentHeightFunction.call(parent, value);
				// always trigger resize
				parent._oResize();
				
				return r;
			};
		}
		
		parent._oContentPlaced = true;
	};
};

/**
 * Formats the double value according to locale (using cvom lib)
 */
org_scn_community_basics.getFormattedValue = function (value, locale, numberOfDecimal) {
	sap.common.globalization.NumericFormatManager.setPVL(locale);
	
	var strFormat = "#"+sap.common.globalization.NumericFormatManager.getThousandSeparator()+"##0";
	
	if (numberOfDecimal > 0) {
		strFormat += sap.common.globalization.NumericFormatManager.getDecimalSeparator();
		for (var i = 0; i < numberOfDecimal; i++) {
			strFormat += "0";
		}
	}
	
	var valueFormatted = sap.common.globalization.NumericFormatManager.format(value, strFormat);
	return valueFormatted;
};

org_scn_community_basics.hideNoDataOverlay = function(componentId, includeFullSizeChild) {
	var css = "";
	css = css + "#" + componentId + "_loadingState {visibility: hidden !important;}";
	css = css + "#" + componentId + "_loadingStateBox {visibility: hidden !important;}";
	css = css + "#" + componentId + "_loadingState_message {visibility: hidden !important;}";

	if(includeFullSizeChild) {
		css = css + "#" + componentId + " > div[class=\"sapUiLayoutAbsPos\"] {width: 100% !important;height: 100% !important;}";
	}
	
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	document.getElementsByTagName('head')[0].appendChild(style);
};