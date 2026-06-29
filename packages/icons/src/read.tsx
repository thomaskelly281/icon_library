import { mdiRead } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Read(props: IconComponentProps) {
  return <Icon path={mdiRead} {...props} />;
}

export { mdiRead as path };
