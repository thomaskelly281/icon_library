import { mdiWeatherCloudy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherCloudy(props: IconComponentProps) {
  return <Icon path={mdiWeatherCloudy} {...props} />;
}

export { mdiWeatherCloudy as path };
