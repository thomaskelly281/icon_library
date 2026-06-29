import { mdiWeatherCloudyClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherCloudyClock(props: IconComponentProps) {
  return <Icon path={mdiWeatherCloudyClock} {...props} />;
}

export { mdiWeatherCloudyClock as path };
