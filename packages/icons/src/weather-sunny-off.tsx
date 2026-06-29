import { mdiWeatherSunnyOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunnyOff(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunnyOff} {...props} />;
}

export { mdiWeatherSunnyOff as path };
