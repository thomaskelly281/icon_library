import { mdiWeatherSunsetDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunsetDown(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunsetDown} {...props} />;
}

export { mdiWeatherSunsetDown as path };
