sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,MessageBox) {
        "use strict";

        return Controller.extend("customerfeedback.controller.View1", {
            onInit: function () {
                var c_Name = this.getView().byId('customerNameInput').getMaxLength();
        

            },
           
            onSubmit: function(){
                debugger;

                 var a = this.getView().byId('customerNameInput').getValue();
                 var cust_Name = a.length;
                 if(cust_Name<=3){
                     MessageToast.show("please enter valid input");
                 }

                var selectedFeedbackType = this.getView().byId('feedbackTypeSelect');
                var customerName = this.byId("customerNameInput").getValue();
                var email = this.byId("emailInput").getValue();
                var feedback = this.getView().byId('feedbackTypeSelect').getSelectedItem();
                var feedbackType = feedback ? selectedFeedbackType.getSelectedKey() : '';
                var comments = this.byId("commentsTextArea").getValue();

                if (!customerName || !email || !feedbackType || !comments) {
                    MessageToast.show("Please fill in all fields");
                    return;
                }
                else{
                    const headers = {
                        "Content-ID": 1
                    }
                    const data = {
                        "Name":customerName+email+feedbackType+comments,
                        "Rating":25,
                        "Price":"1234.5678",
                        "ID":Math.floor(Math.random() * 100) + 1,
                        "ReleaseDate":"2023-07-15T10:30:45"
                    }
                    var oModel2 = this.getOwnerComponent().getModel()
    
                    oModel2.create("/Products",data,{
                        headers: headers,
                        success: function (oData, oResponse) {
                            MessageBox.information("Form Submitted");
                        },
                        error: function (error) {
                            alert(error.message)
                        }
                    })
                
                  
                 
                }
            },
            
        });
    });
