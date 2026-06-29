import { mdiWeatherFog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherFog(props: IconComponentProps) {
  return <Icon path={mdiWeatherFog} {...props} />;
}

export { mdiWeatherFog as path };
