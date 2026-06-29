import { mdiEt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Et(props: IconComponentProps) {
  return <Icon path={mdiEt} {...props} />;
}

export { mdiEt as path };
