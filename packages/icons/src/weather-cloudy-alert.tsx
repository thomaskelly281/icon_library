import { mdiWeatherCloudyAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherCloudyAlert(props: IconComponentProps) {
  return <Icon path={mdiWeatherCloudyAlert} {...props} />;
}

export { mdiWeatherCloudyAlert as path };
