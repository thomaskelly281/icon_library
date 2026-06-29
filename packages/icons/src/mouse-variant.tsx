import { mdiMouseVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseVariant(props: IconComponentProps) {
  return <Icon path={mdiMouseVariant} {...props} />;
}

export { mdiMouseVariant as path };
