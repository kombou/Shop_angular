export class Line {
    id: number;
    name: string;
    price: number;
    quantity: number;

    public totalPrice(): number {
        return this.price * this.quantity;
    }

}
