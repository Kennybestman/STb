window.indexedDB = window.indexedDB || window.mozindexedDB || window.webkitindexedDB || window.msindexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    alert("Your browser does not support indexedDB")
}

var db;

var request = window.indexedDB.open("RSApp", 1);

request.onerror = function (ev) {
    console.log("error" + ev.target.result);
}

request.onsuccess = function (ev) {
    db = request.result
    console.log("success" + db)
}

request.onupgradeneeded = function (ev) {
    var db = ev.target.result;
    var objectStore = db.createObjectStore("myApp")
}