import { mdiWeatherPouring } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPouring(props: IconComponentProps) {
  return <Icon path={mdiWeatherPouring} {...props} />;
}

export { mdiWeatherPouring as path };
