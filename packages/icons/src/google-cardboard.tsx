import { mdiGoogleCardboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleCardboard(props: IconComponentProps) {
  return <Icon path={mdiGoogleCardboard} {...props} />;
}

export { mdiGoogleCardboard as path };
