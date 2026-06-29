import { mdiAlphaK } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaK(props: IconComponentProps) {
  return <Icon path={mdiAlphaK} {...props} />;
}

export { mdiAlphaK as path };
