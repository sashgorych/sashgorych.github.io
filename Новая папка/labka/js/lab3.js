var x,y;
function gcd(a, b) {
    let t;
    while (b) {
        t = a % b;
        a = b;
        b = t;
    }
    return Math.abs(a);
}

function ext_gcd(a, b)
{
    let q, r, x1, x2, y1, y2,d;
    if (b == 0) {
        d = a, x = 1, y = 0;
        return d;
    }
    x2 = 1, x1 = 0, y2 = 0, y1 = 1;
    while (b > 0) {
        q = a / b, r = a - q * b;
        x = x2 - q * x1, y = y2 - q * y1;
        a = b, b = r;
        x2 = x1, x1 = x, y2 = y1, y1 = y;
    }
    d = a, x = x2, y = y2;
    return abs(d);

}