import { mdiWeatherPartlyLightning } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPartlyLightning(props: IconComponentProps) {
  return <Icon path={mdiWeatherPartlyLightning} {...props} />;
}

export { mdiWeatherPartlyLightning as path };
