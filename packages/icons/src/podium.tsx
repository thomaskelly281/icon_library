import { mdiPodium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Podium(props: IconComponentProps) {
  return <Icon path={mdiPodium} {...props} />;
}

export { mdiPodium as path };
