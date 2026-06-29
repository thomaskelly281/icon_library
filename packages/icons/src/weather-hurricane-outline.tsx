import { mdiWeatherHurricaneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherHurricaneOutline(props: IconComponentProps) {
  return <Icon path={mdiWeatherHurricaneOutline} {...props} />;
}

export { mdiWeatherHurricaneOutline as path };
