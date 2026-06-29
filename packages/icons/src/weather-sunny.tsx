import { mdiWeatherSunny } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSunny(props: IconComponentProps) {
  return <Icon path={mdiWeatherSunny} {...props} />;
}

export { mdiWeatherSunny as path };
