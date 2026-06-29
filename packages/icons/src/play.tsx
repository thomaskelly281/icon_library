import { mdiPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Play(props: IconComponentProps) {
  return <Icon path={mdiPlay} {...props} />;
}

export { mdiPlay as path };
