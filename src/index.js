import _ from 'lodash';

const test = {
    a: {
        b: {
            c: 'foo'
        }
    }
};

const res = _.get(test, 'a.b.c');

console.log(res);
