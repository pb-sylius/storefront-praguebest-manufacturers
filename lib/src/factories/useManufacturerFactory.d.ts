import { UseManufacturer, UseManufacturerFactoryParams } from "../types";
import { PlatformApi } from '@vue-storefront/core';
export declare function useManufacturerFactory<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API extends PlatformApi = any>(factoryParams: UseManufacturerFactoryParams<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API>): (id: string) => UseManufacturer<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API>;
