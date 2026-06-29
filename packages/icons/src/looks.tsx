import { mdiLooks } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Looks(props: IconComponentProps) {
  return <Icon path={mdiLooks} {...props} />;
}

export { mdiLooks as path };
