function checkBil(bil) {
    return bil >= 10;
}

function tampilkan(){

    var array = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    console.log("Sebelumnya :", array.join(", "));

    var asc = array.sort(function(a, b){return a-b});
    console.log("Ascending :", asc.join(", "));

    console.log("Descending :", asc.reverse().join(", "));

    var filtered_array = array.filter(checkBil);
    console.log("Filter > 10 :", filtered_array.join(", "));
}

tampilkan();