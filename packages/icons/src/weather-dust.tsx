import { mdiWeatherDust } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherDust(props: IconComponentProps) {
  return <Icon path={mdiWeatherDust} {...props} />;
}

export { mdiWeatherDust as path };
