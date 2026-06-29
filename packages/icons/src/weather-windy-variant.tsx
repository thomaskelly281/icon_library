import { mdiWeatherWindyVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherWindyVariant(props: IconComponentProps) {
  return <Icon path={mdiWeatherWindyVariant} {...props} />;
}

export { mdiWeatherWindyVariant as path };
