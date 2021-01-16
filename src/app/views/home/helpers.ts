import { Combustivel } from "src/types";


export function checkIsSelected( selectedProducts: Combustivel[], product: Combustivel) {
    return selectedProducts.some(item => item.id === product.id);
}
