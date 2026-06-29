import { mdiWeatherHurricane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherHurricane(props: IconComponentProps) {
  return <Icon path={mdiWeatherHurricane} {...props} />;
}

export { mdiWeatherHurricane as path };
