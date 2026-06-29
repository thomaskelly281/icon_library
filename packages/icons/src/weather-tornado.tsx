import { mdiWeatherTornado } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherTornado(props: IconComponentProps) {
  return <Icon path={mdiWeatherTornado} {...props} />;
}

export { mdiWeatherTornado as path };
