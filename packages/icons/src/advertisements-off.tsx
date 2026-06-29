import { mdiAdvertisementsOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AdvertisementsOff(props: IconComponentProps) {
  return <Icon path={mdiAdvertisementsOff} {...props} />;
}

export { mdiAdvertisementsOff as path };
