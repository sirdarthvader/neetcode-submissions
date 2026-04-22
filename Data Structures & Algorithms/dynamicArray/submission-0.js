class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.size === 0) {
            throw new Error('Array is empty');
        }
        return this.array[--this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);
        for(let i = 0; i < this.capacity; i++){
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
