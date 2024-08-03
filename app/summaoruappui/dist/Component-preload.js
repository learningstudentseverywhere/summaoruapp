//@ui5-bundle namesp/summaoruappui/Component-preload.js
sap.ui.require.preload({
	"namesp/summaoruappui/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("namesp.summaoruappui.Component",{metadata:{manifest:"json"}})});
},
	"namesp/summaoruappui/i18n/i18n.properties":'# This is the resource bundle for namesp.summaoruappui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Summa oru app\n\n#YDES: Application description\nappDescription=Summa oru app\n\n#XFLD,39\nflpTitle=Summa oru app\n',
	"namesp/summaoruappui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"namesp.summaoruappui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.2","toolsId":"e6315393-2bf2-43f7-a92d-647564fc1e0c"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ZSumma-display":{"semanticObject":"ZSumma","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"namesp.summaoruappui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BooksList","target":"BooksList"},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"summaoruapprouter"}}'
});
//# sourceMappingURL=Component-preload.js.map