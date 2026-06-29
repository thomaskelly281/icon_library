import { mdiHorseshoe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Horseshoe(props: IconComponentProps) {
  return <Icon path={mdiHorseshoe} {...props} />;
}

export { mdiHorseshoe as path };
