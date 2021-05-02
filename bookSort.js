const books = [
    "Harry Potter",
    "Beloved",
    "Catcher and the Rye",
    "Sense and Sensibility",
    "An Iliad"
]

function charCompare(str1, str2, index = 0) {
    if (str1 === str2) {
        return true;
    }
    if (
        str1.toLowerCase().charCodeAt(index) < str2.toLowerCase().charCodeAt(index)
    ) {
        return true;
    } else if (
        str1.toLowerCase().charCodeAt(index) > str2.toLowerCase().charCodeAt(index)
    ) {
        return false;
    } else {
        return charCompare(str1, str2, index + 1);
    }
}

function bookSort(books) {
    if (books.length <= 1) return books;
    const mid = Math.floor(books.length / 2);
    let left = books.slice(0, mid);
    let right = books.slice(mid, books.length);
    left = bookSort(left);
    right = bookSort(right);
    let leftIndex = 0;
    let rightIndex = 0;
    let outIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (charCompare(left[leftIndex], right[rightIndex])) {
            books[outIndex++] = left[leftIndex++];
        }
        else {
            books[outIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        books[outIndex++] = left[i];
    }
    for (let j = rightIndex; j < right.length; j++) {
        books[outIndex++] = right[j];
    }
    return books;
}

console.log(bookSort(books));