import * as React from 'react';
//
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks';
import { countUp, fetchingCount } from '../../redux/count/slice';

//
export interface MyReduxProps {}

//
function MyRedux({}: MyReduxProps) {
    //
    const count_obj = useReduxSelector((state) => state.count_obj);
    const dispatch = useReduxDispatch();

    //
    React.useEffect(() => {
        dispatch(fetchingCount());
    }, []);

    // ---

    //
    function handleCountUp() {
        dispatch(countUp());
    }

    //
    return (
        <div>
            {count_obj.fetched ? (
                <div>
                    <div>{count_obj.count}</div>

                    <button type="button" onClick={handleCountUp}>Count up</button>
                </div>
            ) : (
                <div>Loading Count...</div>
            )}
        </div>
    );
}

export default MyRedux;
