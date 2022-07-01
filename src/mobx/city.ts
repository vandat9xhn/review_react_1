import { action, computed, flow, makeObservable, observable } from "mobx";

//
const handle_API_City_R = () =>
    new Promise((res) => {
        setTimeout(() => {
            res("HCM");
        }, 500);
    });

//
class CityMobx {
    city_name: string = "";
    has_fetched = false;
    get getCityLength() {
        return this.city_name.length;
    }

    constructor(_city_name = "") {
        makeObservable(this, {
            city_name: observable,
            getCityLength: computed,
            changeCityName: action,
            getCityName: flow,
        });
        this.city_name = _city_name;
    }

    // --- Actions
    changeCityName(new_city_name: string) {
        this.city_name = new_city_name;
    }

    *getCityName() {
        const new_city_name = yield handle_API_City_R();
        this.city_name = new_city_name;
        this.has_fetched = true;
    }
}

export default CityMobx;
