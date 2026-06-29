import { mdiHomeThermometerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeThermometerOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeThermometerOutline} {...props} />;
}

export { mdiHomeThermometerOutline as path };
