// window.onload = function () {
//     let paymentSelect = document.getElementById("paymentSelect");
//     paymentSelect.onchange = function () {
//         let paymentSelectStr = paymentSelect.value;
//         let paymentSelectInt = Number(paymentSelectStr);
//         let paymentSelectResultStr = "手数料：";
//         switch (paymentSelectInt) {
//             case 1:
//                 paymentSelectResultStr += "432円";
//                 break;
//             case 2:
//                 paymentSelectResultStr += "80円";
//                 break;
//             case 3:
//                 paymentSelectResultStr += "0円";
//                 break;
//             case 4:
//                 paymentSelectResultStr += "300円";
//                 break;
//             default:
//                 paymentSelectResultStr = ""
//         }

//         let paymentSelectResult=document.getElementById("paymentSelectResult");
//         paymentSelectResult.textContent=paymentSelectResultStr;        
//     }
// }

function onPaymentSelectChange() {
    let paymentSelect = document.getElementById("paymentSelect");
    paymentSelect.onchange = function () {
        let paymentSelectStr = paymentSelect.value;
        let paymentSelectInt = Number(paymentSelectStr);
        let paymentSelectResultStr = "手数料：";
        switch (paymentSelectInt) {
            case 1:
                paymentSelectResultStr += "432円";
                break;
            case 2:
                paymentSelectResultStr += "80円";
                break;
            case 3:
                paymentSelectResultStr += "0円";
                break;
            case 4:
                paymentSelectResultStr += "300円";
                break;
            default:
                paymentSelectResultStr = ""
        }

        let paymentSelectResult=document.getElementById("paymentSelectResult");
        paymentSelectResult.textContent=paymentSelectResultStr;        
    }
}

paymentSelect.onchange=onPaymentSelectChange;