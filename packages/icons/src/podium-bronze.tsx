import { mdiPodiumBronze } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PodiumBronze(props: IconComponentProps) {
  return <Icon path={mdiPodiumBronze} {...props} />;
}

export { mdiPodiumBronze as path };
