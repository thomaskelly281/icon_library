import { mdiAlphaD } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaD(props: IconComponentProps) {
  return <Icon path={mdiAlphaD} {...props} />;
}

export { mdiAlphaD as path };
