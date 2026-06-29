import { mdiOpera } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Opera(props: IconComponentProps) {
  return <Icon path={mdiOpera} {...props} />;
}

export { mdiOpera as path };
