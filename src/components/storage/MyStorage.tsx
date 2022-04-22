import * as React from 'react';

//
export interface MyStorageProps {}

//
function MyStorage({}: MyStorageProps) {
    //
    React.useEffect(() => {
        // The storage event fires when a storage area has been changed in the context of another document.
        window.addEventListener('storage', handleStorage);

        //
        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    // ----

    //
    function handleStorage(e: StorageEvent) {
        handleStorageChange(e.oldValue, e.newValue);
    }

    //
    function handleStorageChange(oldValue = '', newValue = '') {
        console.log(oldValue, newValue);
    }

    //
    function toggleSetLocalStorage(e: React.MouseEvent<HTMLButtonElement>) {
        const item = localStorage.getItem('storage');

        if (item) {
            localStorage.removeItem('storage');
        } else {
            localStorage.setItem('storage', 'onstorage');
        }

        handleStorageChange(item, localStorage.getItem('storage'));
    }

    //
    return (
        <div>
            <div>
                <button
                    className="cursor-pointer"
                    type="button"
                    onClick={toggleSetLocalStorage}
                >
                    Toggle set item to local storage
                </button>
            </div>
        </div>
    );
}

export default MyStorage;
