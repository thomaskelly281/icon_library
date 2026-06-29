import { mdiWeatherLightningRainy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherLightningRainy(props: IconComponentProps) {
  return <Icon path={mdiWeatherLightningRainy} {...props} />;
}

export { mdiWeatherLightningRainy as path };
