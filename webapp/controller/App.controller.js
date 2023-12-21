sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
], function(Controller, ObjectListItem, ObjectAttribute) {
	"use strict";

	return Controller.extend("sap.ui.demo.MockServer.controller.App", {

		onAdd: function(){
			this.getView().getModel().createEntry(`/Categories`, {
                properties: {
                    CategoryID: 9,
					CategoryName: "Computer"
                },
                success: (data) => {
					console.log(data)
                },
                error: (error) => {
                    console.error(error)
                }
            })

			this.getView().getModel().submitChanges({
				success: (data) => {
					console.log(data)
				},
				error: (error) => {
					console.error(error)
				}
			})
		}
	});

});