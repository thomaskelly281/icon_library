import { mdiPodiumSilver } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PodiumSilver(props: IconComponentProps) {
  return <Icon path={mdiPodiumSilver} {...props} />;
}

export { mdiPodiumSilver as path };
