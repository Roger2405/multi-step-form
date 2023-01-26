export type PathProps = '/' | '/plans' | '/add-ons' | '/summary';
export type PlanTypesProps = 'monthly' | 'yearly';
export type AddOnsProps =
    {
        name: string,
        description: string,
        'monthly': {
            value: number
        },
        'yearly': {
            value: number
        }
    };

export type PlanProps = {
    name: string,
    icon: string,
    'monthly': {
        promotion: string,
        value: number
    }
    'yearly': {
        promotion: string,
        value: number
    }
}