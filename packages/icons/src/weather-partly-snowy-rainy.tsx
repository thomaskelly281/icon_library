import { mdiWeatherPartlySnowyRainy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPartlySnowyRainy(props: IconComponentProps) {
  return <Icon path={mdiWeatherPartlySnowyRainy} {...props} />;
}

export { mdiWeatherPartlySnowyRainy as path };
