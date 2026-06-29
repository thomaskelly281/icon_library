import { mdiWeatherCloudyArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherCloudyArrowRight(props: IconComponentProps) {
  return <Icon path={mdiWeatherCloudyArrowRight} {...props} />;
}

export { mdiWeatherCloudyArrowRight as path };
