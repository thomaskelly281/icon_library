import { mdiWeatherSunset } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunset(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunset} {...props} />;
}

export { mdiWeatherSunset as path };
