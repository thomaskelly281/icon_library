import { mdiShield } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shield(props: IconComponentProps) {
  return <Icon path={mdiShield} {...props} />;
}

export { mdiShield as path };
