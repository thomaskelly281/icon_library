import { mdiWeatherHail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherHail(props: IconComponentProps) {
  return <Icon path={mdiWeatherHail} {...props} />;
}

export { mdiWeatherHail as path };
