import ora from 'next/dist/compiled/ora';
export default function createSpinner(text: string | {
    prefixText: string;
}, options?: ora.Options): ora.Ora | undefined;
