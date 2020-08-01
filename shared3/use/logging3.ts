import { onMounted } from '@vue/composition-api';
import Dummy from '@s3/data/Dummy';

export default function useLogging3()
{
    const dummy: Dummy = {
        id: 'dummy',
    };

    console.log('before onMounted: 3');

    onMounted(() =>
    {
        console.log('mounted: 3');
    });
}