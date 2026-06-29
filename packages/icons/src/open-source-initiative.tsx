import { mdiOpenSourceInitiative } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OpenSourceInitiative(props: IconComponentProps) {
  return <Icon path={mdiOpenSourceInitiative} {...props} />;
}

export { mdiOpenSourceInitiative as path };
