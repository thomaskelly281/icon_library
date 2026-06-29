import { mdiWeatherSunsetUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunsetUp(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunsetUp} {...props} />;
}

export { mdiWeatherSunsetUp as path };
