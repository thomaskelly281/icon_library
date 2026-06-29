import { mdiWeatherSunnyAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunnyAlert(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunnyAlert} {...props} />;
}

export { mdiWeatherSunnyAlert as path };
