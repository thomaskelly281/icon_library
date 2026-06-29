import { mdiHandcuffs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Handcuffs(props: IconComponentProps) {
  return <Icon path={mdiHandcuffs} {...props} />;
}

export { mdiHandcuffs as path };
