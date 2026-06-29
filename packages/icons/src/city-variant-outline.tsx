import { mdiCityVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CityVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiCityVariantOutline} {...props} />;
}

export { mdiCityVariantOutline as path };
