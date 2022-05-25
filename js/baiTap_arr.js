var numArray = [];
//* Thêm số vào mảng
function themSo() {
    var numELE = document.getElementById("num").value;
    numELE = Number(numELE);
    numArray.push(numELE);

    document.getElementById("txtThemSo").innerHTML = numArray;
}
//* END
//* Tính Tổng số dương
function tongSoDuong() {
    var tinhTong = 0;
    for (var i = 0; i < numArray.length; i++) {
        // console.log(i, numArray[i]);
        if (numArray[i] >= 0) {
            // console.log(numArray[i]);
            tinhTong += numArray[i];
        }

    }
    document.getElementById("txtTongSoDuong").innerHTML = "Tổng: " + tinhTong;
}
//*END
//* Đếm có bao nhiêu số dương
function demSo() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }

    }
    document.getElementById("txtDemSoDuong").innerHTML = "Có: " + count + " Số dương"
}
//* END
//* Tìm số nhỏ nhất
function soNhoNhat() {
    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }

    }
    document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;
}
//* END
//* Tìm số dương nhỏ nhất.

function soDuongNhoNhat() {
    // var numDuongArray = [];
    var min = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0 && numArray[i] < min) {
            // numDuongArray.push(numArray[i]);
            min = numArray[i];
        }
    }
    // var min = numDuongArray[0];
    // for (var j = 1; j < numDuongArray.length; j++) {
    //     if (numDuongArray[j] > 0) {
    //         min = numDuongArray[j];
    //     } else {
    //         alert("Không có số dương");
    //     }

    // }

    document.getElementById("txtMinDuong").innerHTML = "Số dương nhỏ nhất: " + min
}
//*END
//* Tìm số chẵn cuối cùng
function soChanCuoiCung() {
    var numLast = []
    var last = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            numLast.push(numArray[i]);
        }

    }
    last = numLast[numLast.length - 1];

    document.getElementById("txtsoChanCuoiCung").innerHTML = "số chẵn cuối cùng: " + last;

}
//*END
//* Hoán đổi vị trí trong mảng.

function hoanDoiViTri() {
    var numELE1 = document.getElementById("num1").value;
    var numELE2 = document.getElementById("num2").value;
    var temp = numArray[numELE1];
    numArray[numELE1] = numArray[numELE2];
    numArray[numELE2] = temp;


    document.getElementById("txtHoanDoiViTri").innerHTML = "Mảng sau đổi: " + numArray;
}
//*END
//* Sắp xếp tăng dần./
//! Sử dụng tham chiếu
function sapXepTangDan() {
    numArrayCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numArrayCopy.push(numArray[i])
    }

    for (var i = 0; i < numArrayCopy.length; i++) {
        for (j = 0; j < numArrayCopy.length - 1; j++) {
            if (numArrayCopy[j] > numArrayCopy[j + 1]) {
                var temp = numArrayCopy[j];
                numArrayCopy[j] = numArrayCopy[j + 1]
                numArrayCopy[j + 1] = temp;

            }

        }

    }
    document.getElementById("txtsapXepTangDan").innerHTML = numArrayCopy;
}
//* END.
//* Tìm số nguyên tố đầu tiên.


function timSoNguyenTo() {
    
    var soNguyenTo = -1;
    var count = -1;
  
    for(var i = 0; i < numArray.length; i++){
      for(var j = 1; j <= numArray[i]; j++) {
        if(numArray[i] % j == 0){
          count++;
        }
      }
      if(count == 1){
        soNguyenTo = numArray[i];
        break;
      }else{
        count = -1;
      }
    }
    document.getElementById("txtTimSoNguyenTo").innerHTML = soNguyenTo;
}
//*END
//* Đém số Nguyên
//! Đếm có bao nhiêu số nguyên Nằm thứ tự thứ 9 làm xong copy xuống dưới k là nó đổi kiểu.
//! Sử dụng tham chiếu; Để chuyển về Mảng khác chỉnh sửa => Không làm thay đổi kiểu của mảng ban đàu.
function demSoNguyen() {
    var numNguyenArray = []
    for(var i = 0 ; i < numArray.length; i++){
        numNguyenArray.push(numArray[i]);

    }
    var count = 0;
    for (var i = 0; i < numNguyenArray.length; i++) {
        if (numNguyenArray[i] = Number.isInteger(numNguyenArray[i])) {
            count++;
        }
    }

    document.getElementById("txtDemSoNguyen").innerHTML = "Có: " + count + " Số nguyên"
}
//*END
//*So sánh số dương với số âm 

function soSanh(){
    var soDuong = 0;
    var soAm = 0;
    var content = "";
    for(var i = 0 ; i < numArray.length ; i++){
        if(numArray[i] > 0){
            soDuong++;
        }else{
            soAm++;
        }

    }
    if(soDuong > soAm){
        content = "Số dương > Số âm" 
    }else if(soDuong == soAm){
        content = "Số dương = số âm"   
    }else {
        content = "số duong < số âm"
    }
    document.getElementById("txtSoSanh").innerHTML = content;
}
//* END
