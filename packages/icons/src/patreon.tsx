import { mdiPatreon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Patreon(props: IconComponentProps) {
  return <Icon path={mdiPatreon} {...props} />;
}

export { mdiPatreon as path };
