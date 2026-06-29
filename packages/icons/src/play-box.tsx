import { mdiPlayBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBox(props: IconComponentProps) {
  return <Icon path={mdiPlayBox} {...props} />;
}

export { mdiPlayBox as path };
