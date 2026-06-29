import { mdiOctagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Octagram(props: IconComponentProps) {
  return <Icon path={mdiOctagram} {...props} />;
}

export { mdiOctagram as path };
