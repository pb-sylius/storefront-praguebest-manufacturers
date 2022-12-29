import { UseManufacturer, UseManufacturerFactoryParams, UseManufacturerErrors } from "../types";
import { Ref, computed } from '@nuxtjs/composition-api';
import { PlatformApi, sharedRef, Logger, configureFactoryParams } from '@vue-storefront/core';

export function useManufacturerFactory<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API extends PlatformApi = any>(
  factoryParams: UseManufacturerFactoryParams<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API>
) {
  return function useManufacturer(id: string): UseManufacturer<MANUFACTURERS, MANUFUACTURER_SEARCH_PARAMS, API> {
    const manufacturers: Ref<MANUFACTURERS> = sharedRef([], `useManufacturer-manufacturers-${id}`);
    const loading = sharedRef(false, `useManufacturer-loading-${id}`);
    const error: Ref<UseManufacturerErrors> = sharedRef({
      search: null
    }, `useManufacturer-error-${id}`);

    const _factoryParams = configureFactoryParams(
      factoryParams,
      { mainRef: manufacturers, alias: 'currentManufacturers', loading, error }
    );

    const search = async (searchParams) => {
      Logger.debug(`useManufacturer/${id}/search`, searchParams);

      try {
        loading.value = true;
        manufacturers.value = await _factoryParams.manufacturersSearch(searchParams);
        error.value.search = null;
      } catch (err) {
        error.value.search = err;
        Logger.error(`useManufacturer/${id}/search`, err);
      } finally {
        loading.value = false;
      }
    };

    return {
      search,
      manufacturers: computed(() => manufacturers.value),
      loading: computed(() => loading.value),
      error: computed(() => error.value)
    };
  };
}
