import { mdiWeatherSnowy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherSnowy(props: IconComponentProps) {
  return <Icon path={mdiWeatherSnowy} {...props} />;
}

export { mdiWeatherSnowy as path };
