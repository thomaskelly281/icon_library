import { mdiWeatherMoonsetUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherMoonsetUp(props: IconComponentProps) {
  return <Icon path={mdiWeatherMoonsetUp} {...props} />;
}

export { mdiWeatherMoonsetUp as path };
