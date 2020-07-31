import { onMounted } from '@vue/composition-api';
import Dummy from '@s2/data/Dummy';

export default function useLogging2()
{
    const dummy: Dummy = {
        id: 'dummy',
    };

    console.log('before onMounted: 2');

    onMounted(() =>
    {
        console.log('mounted: 2');
    });
}