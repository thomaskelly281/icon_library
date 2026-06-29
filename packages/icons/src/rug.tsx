import { mdiRug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rug(props: IconComponentProps) {
  return <Icon path={mdiRug} {...props} />;
}

export { mdiRug as path };
