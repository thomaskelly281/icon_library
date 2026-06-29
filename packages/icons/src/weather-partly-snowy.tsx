import { mdiWeatherPartlySnowy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPartlySnowy(props: IconComponentProps) {
  return <Icon path={mdiWeatherPartlySnowy} {...props} />;
}

export { mdiWeatherPartlySnowy as path };
