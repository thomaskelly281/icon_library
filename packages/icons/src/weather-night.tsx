import { mdiWeatherNight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherNight(props: IconComponentProps) {
  return <Icon path={mdiWeatherNight} {...props} />;
}

export { mdiWeatherNight as path };
