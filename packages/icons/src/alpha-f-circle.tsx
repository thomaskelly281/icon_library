import { mdiAlphaFCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaFCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaFCircle} {...props} />;
}

export { mdiAlphaFCircle as path };
