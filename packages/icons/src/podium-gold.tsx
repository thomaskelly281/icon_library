import { mdiPodiumGold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PodiumGold(props: IconComponentProps) {
  return <Icon path={mdiPodiumGold} {...props} />;
}

export { mdiPodiumGold as path };
