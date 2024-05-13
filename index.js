// Mükəmməl Rəqəmlər  

// 6 - 28 - 496 - 8128 rəqəmləri Mükəmməl rəqəmlərdir

// 6  = 6/1, 6/2, 6/3, 6/6  =  12  =  6*2 = 12
// 28 = 28/1, 28/2, 28/4, 28/7, 28/14, 28/28  =  56  =  28*2 = 56


isPerfectNumber(6);

function isPerfectNumber(number) {

    let cəm = 0;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            cəm += i;
        }
    }
    cəm += 1 + number;

    if (cəm == number * 2) {
        console.log("Mükəmməl Rəqəmdir");
    }
    else {
        console.log("Mükəmməl Rəqəm Deyil");
    }
}