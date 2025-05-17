{


    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper || toUpper === undefined) {
            input = input.toUpperCase();
        }
        else {
            input = input.toLowerCase();
        }

        return input;
    }


    function filterByRating(items: { title: string, rating: number }[]): { title: string, rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return ([] as T[]).concat(...arrays);
    }

    class Vehicle {
        private _make: string;
        private _year: number;
        constructor(_make: string, _year: number) {
            this._make = _make;
            this._year = _year;
        }
        get getInfo(): string {
            return `Make: ${this._make}, Year: ${this._year}`;
        }
    }

    class Car extends Vehicle {
        private _model: string;
        constructor(_make: string, _year: number, _model: string) {
            super(_make, _year);
            this._model = _model;
        }
        get getModel(): string {
            return `Model: ${this._model}`
        }
    }



    function processValue(value: string | number): number {
        if (typeof (value) === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }

    }

    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (!products.length)
            return null;
        let max: number = 0;
        let indx: number = 0;
        for (let i: number = 0; i < products.length; ++i) {
            if (max <= products[i].price) {
                indx = i;
                max = products[i].price;
            }
        }
        return products[indx];
    }



}