import { mdiViolin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Violin(props: IconComponentProps) {
  return <Icon path={mdiViolin} {...props} />;
}

export { mdiViolin as path };
