import { mdiCityVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CityVariant(props: IconComponentProps) {
  return <Icon path={mdiCityVariant} {...props} />;
}

export { mdiCityVariant as path };
