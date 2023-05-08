const binarySearch = (arr, value) => {
    let middle = Math.floor(arr.length / 2);

    switch (true) {
        case value === middle:
            return value;
        case value < arr[middle]:
            return binarySearch(arr.slice(0, middle), value);
        case value > arr[middle]:
            return binarySearch(arr.slice(middle), value);
        default:
            throw new Error('Something went wrong 🤔');
    };
};