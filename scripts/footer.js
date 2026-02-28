const copyrightElement = document.getElementById("copyright-year");
if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = copyrightElement.innerHTML.replace("[YEAR]", currentYear);
}

