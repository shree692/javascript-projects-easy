function checkPrime() {
    const n = Number.parseInt(document.getElementById("num").value, 10);
    const result = document.getElementById("result");

    if (Number.isNaN(n) || n <= 1) {
        result.textContent = "Enter a number greater than 1";
        result.style.color = "red";
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = `${n} is a prime number`;
        result.style.color = "green";
    } else {
        result.textContent = `${n} is not a prime number`;
        result.style.color = "red";
    }
}