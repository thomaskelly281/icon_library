import { mdiAirplaneCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneCog(props: IconComponentProps) {
  return <Icon path={mdiAirplaneCog} {...props} />;
}

export { mdiAirplaneCog as path };
