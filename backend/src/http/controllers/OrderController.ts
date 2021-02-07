import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { POST } from "../decorators/Methods";
import { BODY } from "../decorators/Request";
import { CreateOrderVal } from "../validators/CreateOrder";
import { JSONValidator } from "./formatters/JSONValidator";

@CONTROLLER("order")
export class OrderController {

    @POST()
    create(
        @BODY(JSONValidator) order: CreateOrderVal
    ) {

        return Manager.order.createOrder(order);

    }

}