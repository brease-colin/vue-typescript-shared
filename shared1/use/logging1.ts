import { onMounted } from '@vue/composition-api';
import Dummy from '@s1/data/Dummy';

export default function useLogging1()
{
    const dummy: Dummy = {
        id: 'dummy',
    };

    console.log('before onMounted: 1');

    onMounted(() =>
    {
        console.log('mounted: 1');
    });
}