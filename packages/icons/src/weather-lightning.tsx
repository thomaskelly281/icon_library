import { mdiWeatherLightning } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherLightning(props: IconComponentProps) {
  return <Icon path={mdiWeatherLightning} {...props} />;
}

export { mdiWeatherLightning as path };
