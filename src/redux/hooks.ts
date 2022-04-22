import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ReduxDispatch, ReduxState } from '.';

export const useReduxSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useReduxDispatch = () => useDispatch<ReduxDispatch>();
