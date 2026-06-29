import { mdiWeatherSnowyHeavy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSnowyHeavy(props: IconComponentProps) {
  return <Icon path={mdiWeatherSnowyHeavy} {...props} />;
}

export { mdiWeatherSnowyHeavy as path };
