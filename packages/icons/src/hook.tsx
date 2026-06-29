import { mdiHook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hook(props: IconComponentProps) {
  return <Icon path={mdiHook} {...props} />;
}

export { mdiHook as path };
