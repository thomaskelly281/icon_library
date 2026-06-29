import { mdiWeatherPartlyRainy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeatherPartlyRainy(props: IconComponentProps) {
  return <Icon path={mdiWeatherPartlyRainy} {...props} />;
}

export { mdiWeatherPartlyRainy as path };
