import { mdiMedal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Medal(props: IconComponentProps) {
  return <Icon path={mdiMedal} {...props} />;
}

export { mdiMedal as path };
