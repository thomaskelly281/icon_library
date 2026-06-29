import { mdiSpa } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spa(props: IconComponentProps) {
  return <Icon path={mdiSpa} {...props} />;
}

export { mdiSpa as path };
