import { mdiWeatherPartlyCloudy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPartlyCloudy(props: IconComponentProps) {
  return <Icon path={mdiWeatherPartlyCloudy} {...props} />;
}

export { mdiWeatherPartlyCloudy as path };
