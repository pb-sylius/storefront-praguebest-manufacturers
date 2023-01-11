import { PlatformApi, ComputedProperty, Composable, ComposableFunctionArgs, Context, CustomQuery, FactoryParams, AgnosticPrice } from "@vue-storefront/core";
import { Product } from '@realtainment/sylius-api/src/types';
export interface UseManufacturerErrors {
    search: Error;
}
export interface ManufacturerSearchParams {
    perPage?: number;
    page?: number;
    sort?: any;
    term?: any;
    filters?: any;
    id?: string;
    [x: string]: any;
}
export interface UseManufacturer<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API extends PlatformApi = any> extends Composable<API> {
    manufacturers: ComputedProperty<MANUFACTURERS>;
    loading: ComputedProperty<boolean>;
    error: ComputedProperty<UseManufacturerErrors>;
    search(params: ComposableFunctionArgs<MANUFUACTURER_SEARCH_PARAMS>): Promise<void>;
    one(params: ComposableFunctionArgs<MANUFUACTURER_SEARCH_PARAMS>): Promise<void>;
    all(params: ComposableFunctionArgs<MANUFUACTURER_SEARCH_PARAMS>): Promise<void>;
    [x: string]: any;
}
export interface UseManufacturerFactoryParams<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS extends ManufacturerSearchParams, API extends PlatformApi = any> extends FactoryParams<API> {
    manufacturersSearch: (context: Context, params: MANUFUACTURER_SEARCH_PARAMS & {
        customQuery?: CustomQuery;
    }) => Promise<MANUFACTURERS>;
    manufacturersAll: (context: Context, params: MANUFUACTURER_SEARCH_PARAMS & {
        customQuery?: CustomQuery;
    }) => Promise<MANUFACTURERS>;
    manufacturersOne: (context: Context, params: MANUFUACTURER_SEARCH_PARAMS & {
        customQuery?: CustomQuery;
    }) => Promise<MANUFACTURERS>;
}
export type Manufacturer = Record<string, unknown>;
export type ManufacturerResponse = {
    data: Manufacturer[];
    total: number;
};
export interface ManufacturerGetters<MANUFACTURER> {
    getName: (manufacturer: MANUFACTURER) => string;
    getSlug: (manufacturer: MANUFACTURER) => string;
    getCoverImage: (manufacturer: MANUFACTURER) => string;
    getId: (manufacturer: MANUFACTURER) => string;
    getProducts: (manufacturer: MANUFACTURER) => Product[];
    getProductsPagination: (manufacturer: MANUFACTURER, activePage: number) => any;
    getProductPrice: (product: any) => AgnosticPrice;
    getProductImage: (product: any) => string;
    [getterName: string]: any;
}
