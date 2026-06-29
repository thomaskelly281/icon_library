import { mdiCogPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogPlay(props: IconComponentProps) {
  return <Icon path={mdiCogPlay} {...props} />;
}

export { mdiCogPlay as path };
