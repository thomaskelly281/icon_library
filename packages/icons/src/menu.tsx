import { mdiMenu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Menu(props: IconComponentProps) {
  return <Icon path={mdiMenu} {...props} />;
}

export { mdiMenu as path };
