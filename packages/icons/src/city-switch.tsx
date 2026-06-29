import { mdiCitySwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CitySwitch(props: IconComponentProps) {
  return <Icon path={mdiCitySwitch} {...props} />;
}

export { mdiCitySwitch as path };
