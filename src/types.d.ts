export type PathProps = '/' | '/plans' | '/add-ons' | '/summary';
export type PlanTypesProps = 'monthly' | 'yearly';
export type AddOnsProps =
    {
        name: string,
        description: string,
        value: {
            'monthly': number
            'yearly': number
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