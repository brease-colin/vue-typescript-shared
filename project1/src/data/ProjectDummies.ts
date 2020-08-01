import Dummy1 from '@s1/data/Dummy';
import Dummy2 from '@s2/data/Dummy';
import Dummy3 from '@s3/data/Dummy';

export interface ProjectDummy1 extends Dummy1
{
    name: string;
}

export interface ProjectDummy2 extends Dummy2
{
    name: string;
}

export interface ProjectDummy3 extends Dummy3
{
    name: string;
}
