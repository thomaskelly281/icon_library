import { mdiSmoke } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Smoke(props: IconComponentProps) {
  return <Icon path={mdiSmoke} {...props} />;
}

export { mdiSmoke as path };
