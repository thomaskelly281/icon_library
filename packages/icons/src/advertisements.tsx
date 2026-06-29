import { mdiAdvertisements } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Advertisements(props: IconComponentProps) {
  return <Icon path={mdiAdvertisements} {...props} />;
}

export { mdiAdvertisements as path };
