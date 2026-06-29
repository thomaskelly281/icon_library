import { mdiWeatherHazy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherHazy(props: IconComponentProps) {
  return <Icon path={mdiWeatherHazy} {...props} />;
}

export { mdiWeatherHazy as path };
