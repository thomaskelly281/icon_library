import { mdiBookPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlay(props: IconComponentProps) {
  return <Icon path={mdiBookPlay} {...props} />;
}

export { mdiBookPlay as path };
