import { mdiWeatherNightPartlyCloudy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherNightPartlyCloudy(props: IconComponentProps) {
  return <Icon path={mdiWeatherNightPartlyCloudy} {...props} />;
}

export { mdiWeatherNightPartlyCloudy as path };
