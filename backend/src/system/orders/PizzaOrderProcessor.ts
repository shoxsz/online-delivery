import { OrderProduct, PizzaDetails } from "../../entities/Order";
import { Product } from "../../entities/Product";
import { ObjectHelper } from "../../utils/ObjectHelper";
import { OrderProcessor } from "../OrderProcessor";

export class PizzaOrderProcessor implements OrderProcessor {
    
    getOrderType(): string {
        return "pizza";
    }

    getProductsToResolve(order: OrderProduct<string>): { [field: string]: string } {

        const details: PizzaDetails<string> = order.details;

        return ObjectHelper.shrink({
            flavor1: details.flavor1,
            flavor2: details.flavor2,
            border: details.border,
            tamanho: details.tamanho
        });

    }

    calculateOrderValue(order: OrderProduct<Product>): number {

        const details: PizzaDetails<Product> = order.details;

        const twoFlavors = !!details.flavor2;

        const flavor1Price = this.getProductPrice(details.flavor1, details.tamanho);
        const flavor2Price = this.getProductPrice(details.flavor2, details.tamanho);
        const borderPrice = this.getProductPrice(details.border, details.tamanho);

        if(twoFlavors) {
            return ((flavor1Price + flavor2Price) / 2) + borderPrice;
        }

        return flavor1Price + borderPrice;

    }

    private getProductPrice(flavor: Product, tamanho: Product) {

        if(!flavor) {
            return 0;
        }

        const variation = flavor.variations["tamanho"]?.find(variation => variation.name == tamanho.name);

        return variation?.price || tamanho.price;

    }

}