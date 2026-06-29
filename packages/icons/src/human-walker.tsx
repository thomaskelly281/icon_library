import { mdiHumanWalker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanWalker(props: IconComponentProps) {
  return <Icon path={mdiHumanWalker} {...props} />;
}

export { mdiHumanWalker as path };
