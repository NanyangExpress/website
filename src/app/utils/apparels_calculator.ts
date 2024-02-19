export const quantity_factor = {
    "<20": 0.35,
    "20-29": 0.4,
    "30-49": 0.5,
    "50-75": 0.55,
    "76-99": 0.575,
    "100-150": 0.6,
    "151-199": 0.625,
    "200-299": 0.65,
    "300-399": 0.6625,
    ">399": 0.625
}

export const personalization_factor = {
    "Yes": 1,
    "No": 0
}

export const printing_factor = (printing_method: string, size?: string, quantity?: string) => 
{
    if (printing_method == "SILK SCREEN" && quantity)
    {
        switch (quantity)
        {
            case "20-29 Pieces":
            case "30-49 Pieces":
                return 0.37
            case "50-75 Pieces":
            case "76-99 Pieces":
            case "100-150 Pieces":
            case "151-199 Pieces":
                return 0.28
            default:
                return 0.23
        }
    }
    if (printing_method == "HEAT TRANSFER - DIRECT TO FILM" && size)
    {
        if (size == 'A5')
            return 0.37
        else if (size == 'A4')
            return 0.74
        else if (size == 'A3')
            return 1.11
    }
    if (printing_method == "EMBROIDERY" && size && size == 'A5')
    {
        return 0.56
    }
    if (printing_method == 'MULTI COLOUR EMBROIDERY' && size && size == 'A5')
        return 1.11
}

export const shirt_factor = {
    "Dri-Fit T-shirt REGULAR": 2,
    "Dri-Fit T-shirt PREMIUM": 2.96,
    "Dri-Fit T-shirt CHILD": 1.23,
    "Cotton T-shirt REGULAR 180GSM": 2.19,
    "Cotton T-shirt PREMIUM 180GSM": 2.86,
    "Cotton T-shirt REGULAR 200GSM": 2.67,
    "Cotton T-shirt PREMIUM 200GSM": 3.21,
    "Cotton T-shirt PREMIUM 220GSM": 3.58,
    "Cotton T-shirt PREMIUM 260GSM": 3.34,
    "Hoodie REGULAR": 3.58,
    "Hoodie PREMIUM": 4.34,
    "Windbreaker": 4.34,
    "Dri-Fit Singlet REGULAR": 2.08,
    "Rashguard": 6.42,
    "Tracksuit REGULAR": 6.79,
    "Tracksuit PREMIUM": 11.13,
    "Sweatshirt PREMIUM 220GSM": 4.01
}

export const weight_factor = {
    "Dri-Fit T-shirt REGULAR": 0.8,
    "Dri-Fit T-shirt PREMIUM": 0.8,
    "Dri-Fit T-shirt CHILD": 0.8,
    "Cotton T-shirt REGULAR 180GSM": 0.8,
    "Cotton T-shirt PREMIUM 180GSM": 0.8,
    "Cotton T-shirt REGULAR 200GSM": 0.9,
    "Cotton T-shirt PREMIUM 200GSM": 0.9,
    "Cotton T-shirt PREMIUM 220GSM": 1,
    "Cotton T-shirt PREMIUM 260GSM": 1.15,
    "Hoodie REGULAR": 1.6,
    "Hoodie PREMIUM": 1.6,
    "Windbreaker": 1,
    "Dri-Fit Singlet REGULAR": 0.8,
    "Rashguard": 1.6,
    "Tracksuit REGULAR": 1.6,
    "Tracksuit PREMIUM": 1.6,
    "Sweatshirt PREMIUM 220GSM": 0.9
}

export const shipping_factor = {
    "Standard": 1,
    "Express": 2,
    "Supreme": 3
}
export const apparel_price_calculation = (
    personalization_factor: number,
    printing_factor_1: number,
    printing_factor_2: number = 0,
    printing_factor_3: number = 0,
    shirt_factor: number,
    weight_factor: number,
    shipping_factor: number,
    quantity_factor: number
    ) => {
        const price = (personalization_factor + printing_factor_1 + printing_factor_2 + printing_factor_3 + shirt_factor + weight_factor * shipping_factor) / quantity_factor;
        return price
    }
