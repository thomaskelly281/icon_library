import { mdiWeatherMoonsetDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherMoonsetDown(props: IconComponentProps) {
  return <Icon path={mdiWeatherMoonsetDown} {...props} />;
}

export { mdiWeatherMoonsetDown as path };
