import { mdiWeatherWindy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherWindy(props: IconComponentProps) {
  return <Icon path={mdiWeatherWindy} {...props} />;
}

export { mdiWeatherWindy as path };
