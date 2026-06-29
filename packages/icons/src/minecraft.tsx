import { mdiMinecraft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Minecraft(props: IconComponentProps) {
  return <Icon path={mdiMinecraft} {...props} />;
}

export { mdiMinecraft as path };
