import { mdiWeatherRainy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherRainy(props: IconComponentProps) {
  return <Icon path={mdiWeatherRainy} {...props} />;
}

export { mdiWeatherRainy as path };
