import { mdiSimAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimAlert(props: IconComponentProps) {
  return <Icon path={mdiSimAlert} {...props} />;
}

export { mdiSimAlert as path };
