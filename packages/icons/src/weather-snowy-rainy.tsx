import { mdiWeatherSnowyRainy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSnowyRainy(props: IconComponentProps) {
  return <Icon path={mdiWeatherSnowyRainy} {...props} />;
}

export { mdiWeatherSnowyRainy as path };
