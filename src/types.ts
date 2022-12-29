import {
  PlatformApi,
  ComputedProperty,
  Composable,
  ComposableFunctionArgs,
  Context,
  CustomQuery,
  FactoryParams
} from "@vue-storefront/core";

export interface UseManufacturerErrors {
  search: Error;
}

export interface ManufacturerSearchParams {
  perPage?: number;
  page?: number;
  sort?: any;
  term?: any;
  filters?: any;
  [x: string]: any;
}

export interface UseManufacturer<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API extends PlatformApi = any> extends Composable<API> {
  manufacturers: ComputedProperty<MANUFACTURERS>;
  loading: ComputedProperty<boolean>;
  error: ComputedProperty<UseManufacturerErrors>;
  search(params: ComposableFunctionArgs<MANUFUACTURER_SEARCH_PARAMS>): Promise<void>;
  [x: string]: any;
}

export interface UseManufacturerFactoryParams<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS extends ManufacturerSearchParams, API extends PlatformApi = any> extends FactoryParams<API> {
  manufacturersSearch: (context: Context, params: MANUFUACTURER_SEARCH_PARAMS & { customQuery?: CustomQuery }) => Promise<MANUFACTURERS>;
}

export type Manufacturer = Record<string, unknown>;

export type ManufacturerResponse = {
  data: Manufacturer[];
  total: number;
};
