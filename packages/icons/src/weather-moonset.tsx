import { mdiWeatherMoonset } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherMoonset(props: IconComponentProps) {
  return <Icon path={mdiWeatherMoonset} {...props} />;
}

export { mdiWeatherMoonset as path };
