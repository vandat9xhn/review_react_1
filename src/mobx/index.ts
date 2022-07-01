import { flowResult } from "mobx";
import CityMobx from "./city";

//
export const storeMobxCity = new CityMobx("");
flowResult(storeMobxCity.getCityName());
