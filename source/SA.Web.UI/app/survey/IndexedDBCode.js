// Code goes here
var app = angular.module("surveyapp", []);

var db = null;
var thisDB;
var version = 1;
var db;
var store;
var transaction;
var survey;
var request;

function indexedDBOk() {
    return "indexedDB" in window;
}

document.addEventListener("DOMContentLoaded",function() {
    if(!indexedDBOk) //if indexedDB is not supported in the current browser then do nothing
        return;

    var openRequest = indexedDB.open("SurveyAppData", version);

    openRequest.onupgradeneeded = function (e) {
        thisDB = e.target.result;
        e.target.transaction.onerror = indexedDB.onerror;

        if (!thisDB.objectStoreNames.contains("SurveyApp")) {
            thisDB.createObjectStore("SurveyApp", {autoIncrement: true});
        }
    }

    openRequest.onsuccess = function (e) {
        console.log("Now running on success");
        db = e.target.result;
         	
        // Listen for add clicks
        document.querySelector("#addButton").addEventListener("click", addSurveyData, false);
    }

    openRequest.onerror = function (e) {
        //deferred.reject();
        console.log("An error has occured!")  //do something for the error
    }
}, false);

function addSurveyData (e) {
    var name = document.querySelector("#name").value;
    var name = document.querySelector("#cellnumber").value;
    var name = document.querySelector("#address").value;
    var name = document.querySelector("#work").value;
    var name = document.querySelector("#dependents").value;
    var name = document.querySelector("#frequency").value;
    var name = document.querySelector("#duration").value;
    var name = document.querySelector("#problems").value;

    console.log("About to add SurveyData");

    transaction = db.transaction(["SurveyApp"],"readwrite");
    store = transaction.objectStore("SurveyApp");

    //Define a Survey App
    survey = {
        name:name,
        cellnumber:cellnumber,
        address:address,
        work:work,
        dependents:dependents,
        frequency:frequency,
        duration:duration,
        problems:problems,
        created:new Date()
    }

    //Add Survey Data 
    request = store.add(survey);
		
    request.onerror = function (e) {
        console.log("Error", e.target.error.name);
    }

    request.onsuccess = function (e) {
        console.log("Wow!, added successfully!)";
    }
}